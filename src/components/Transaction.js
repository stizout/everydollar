import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome, } from '@expo/vector-icons';
import { MaterialIcons, } from '@expo/vector-icons';
import Button from './Button';
import moment from 'moment';

const Transaction = ({date, title, category, amount}) => {
    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <View style={styles.dateShape}></View>
                    <Text style={styles.dateFontTop}>{moment(date).format("Do")}</Text>
                    <Text style={styles.dateFont}>{moment(date).format("MMM")}</Text>

            </View>
            <View>
                <Text>{title}</Text>
                <Text>{category}</Text>
            </View>
            <Text>{amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    dateContainer: {
        position: 'relative',
        textAlign: 'center',
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    dateShape: {
        backgroundColor: 'white',
        position: 'absolute',
        left: '5%',
        top: '5%',
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    dateFontTop: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 5.5,
        color: 'red'
    },
    dateFont: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500',
        color: 'red'
    }

})

export default withNavigation(Transaction);