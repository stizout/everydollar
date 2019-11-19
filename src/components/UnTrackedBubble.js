import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { FontAwesome, } from '@expo/vector-icons';
import { MaterialIcons, } from '@expo/vector-icons';
import Button from './Button';
import jsonServer from '../api/jsonServer';

const UnTrackedBubble = ({unTracked, budgetCategories, refreshData}) => {
    const [showUntracked, setShowUntracked] = useState(false);
    const [ transaction, setTransaction] = useState(null);
    const [showCategories, setShowCategories] = useState(false)

    pickCategory = (element) => {
        setTransaction(element)
        setShowCategories(true);
    }

    handleTrackExpense = (e, ele) => {
        let editTransaction = transaction;
        editTransaction.budgetCategory = e.title;
        editTransaction.budgetItem = ele.title;
        jsonServer.put(`/transactions/${transaction.id}`, editTransaction).then(() => {
            refreshData();
            setShowCategories(false)
        })
    }

    test = () => {
        console.log('worked')
    }

    if(showUntracked) {
        return (
            <Modal visible={true} transparent={true} onRequestClose={() => test()} animationType="slide">
                <View style={styles.unTrackedContainer}>
                        {showCategories ?
                        <ScrollView style={styles.categoryContainer}>
                            <TouchableOpacity onPress={() => setShowUntracked(false)}>
                                <FontAwesome name="close" style={{fontSize: 35}}/>
                            </TouchableOpacity>
                            {budgetCategories.map((e) => {
                                return e.budgetItems.map(ele => {
                                    return (
                                        <TouchableOpacity onPress={() => handleTrackExpense(e, ele)} key={ele.title}>
                                            <Text style={{textAlign: 'center'}}>{ele.title}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            })}
                        </ScrollView>
                        : null }
                <ScrollView style={styles.bubbleContainer} horizontal={true}>
                    {unTracked.map((e, i) => {
                        return (
                            <TouchableOpacity key={i} style={styles.bubble} onPress={() => pickCategory(e)}>
                                <Text>{numberFormater(e.amount)}</Text>
                                <Text style={styles.where} numberOfLines={1}>{e.where}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </Modal>
        )
    } else {
        return (
            <TouchableOpacity onPress={() => setShowUntracked(true)} style={styles.container}>
                <Text style={{fontSize: 30}}>{unTracked.length}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100,
        alignSelf: 'center',
        backgroundColor: '#E67021',
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    unTrackedContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100,
        alignSelf: 'center',
        height: 120,
        width: '95%',
        flexDirection: 'row'
        },
        bubbleContainer: {
            flexDirection: 'row'
        },
    bubble: {
        backgroundColor: '#E67021',
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    where: {
        width: 80,
    },
    categoryContainer: {
        position: 'absolute',
        bottom: 130,
        backgroundColor: 'white',
        width: '100%',
        height: 300
    }
});

function numberFormater (amount) {
    let removeChar = amount.replace(/[&/\\$,.]/g, '');
    let number = removeChar.split('');
    if(number.length === 0 || amount === '0') {
        return "$0.00"
    } else if(number.length === 6) {
        number.splice(1, 0, ',');
    } else if(number.length === 7) {
        number.splice(2, 0, ',');
    } else if(number.length === 8) {
        number.splice(3, 0, ',');
    } else if(number.length === 9) {
        number.splice(1, 0, ',');
        number.splice(5, 0, ',');
    }
    number.splice(number.length -2 , 0, ".");
    number.splice(0, 0, "$");
    return number.join('');
}


export default UnTrackedBubble;