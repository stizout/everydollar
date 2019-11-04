import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BudgetItem from './BudgetItem';

const Income = ({ props }) => {
    return (
        <View style={styles.viewContainer}>
            <View style={{backgroundColor: '#fff'}}>
                <Text style={styles.title}>{props[0].title}</Text>
                {
                    props[0].lineItems.map((item, i) => <BudgetItem title={item.title} amount={item.amount} key={i}/>)
                }
                    <View style={styles.lineItem}>
                    <Text style={{marginHorizontal: 20, padding: 5}}>Add Item</Text>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: .25,
        backgroundColor: '#F5F7F8',
        paddingTop: 15,
        paddingBottom: 15,
    },
    title: {
        fontSize: 20,
        marginHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#0097a8'
    }
})

export default Income;