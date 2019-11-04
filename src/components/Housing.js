import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BudgetItem from './BudgetItem';

const Housing = () => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.title}>Housing</Text>
            <View style={styles.hr}/>
            <BudgetItem />
            <BudgetItem />
            <BudgetItem />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: .25,
        backgroundColor: 'lightgray',
        marginVertical: 5,
    },
    title: {
        fontSize: 20,
        padding: 5,
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: .5,
        marginHorizontal: 10
    }
})

export default Housing;