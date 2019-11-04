import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import moment from 'moment';


const NavigationOptions = () => {
    const [showMonths, setShow] = useState(false);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept','Oct', 'Nov', 'Dec'];


    showModal = () => {
        if(showMonths) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    hideModal = () => {
        if(showMonths) {
            setShow(false);
        }
    }

    return (
            <View style={{zIndex: 0}}>
                <View style={styles.monthDiv}>
                    <TouchableOpacity onPress={showModal}>
                        <Text style={styles.buttonFont}>
                            {months[moment().month()]}
                            <Ionicons name="ios-arrow-down" style={styles.downArrow}/>
                        </Text>
                    </TouchableOpacity>
                    <Feather name="plus" style={styles.plusSign}/>
                </View>
                {
                    showMonths ?
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.monthsModal}
                        data={months}
                        keyExtractor={(m, i) => `${i}`}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity>
                                    <Text style={styles.monthsModalText}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    : null
                }
                <View style={styles.spendingDiv}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonFont}>Planned</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMiddle}>
                        <Text style={styles.buttonFont}>Spent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonFont}>Remainging</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    monthDiv: {
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        zIndex: 0,
        color: '#fff'
    },
    spendingDiv: {
        flexDirection: 'row',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 380
    },
    downArrow: {
        fontSize: 18,
        marginLeft: 15
    }, 
    plusSign: {
        position: 'absolute',
        right: 10,
        fontSize: 30
    },
    monthsModal: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 40,
        zIndex: 1,
        alignSelf: 'center',
        width: 125,
        height: 25      
    },
    monthsModalText: {
        marginHorizontal: 2,
        flex: 1,
        borderRightWidth: .5,
        borderRightColor: 'black',
        fontSize: 20
    },
    button: {
        flex: 1,
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: 'black',
        padding: 3
    },
    buttonMiddle: {
        flex: 1,
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderColor: 'black',
        padding: 3
    },
    button: {
        flex: 1,
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: 'black',
        padding: 3
    },
    buttonFont: {
        fontSize: 20
    }
})

export default NavigationOptions;