import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BudgetItem from './BudgetItem';

const PlannedContainer = ({ title, budgetItems, transactions, screen }) => {
    const sumTrans = (transactions, item) => {
        let arr = transactions.map((e) => {
            if(e.budgetItem === item.title) {
                return +e["amount"]
            } else {
                return 0
            }
        });
        if(arr.length > 0) {
            return arr.reduce((a,b) => a + b)
        }
    }
    return (
        <View style={styles.viewContainer}>
            <View style={{backgroundColor: '#fff'}}>
                <Text style={styles.title}>{title}</Text>
                {
                    budgetItems.map((item, i) => {
                        let favorite = title === "Favorites" && item.favorite
                        return <BudgetItem title={item.title} amount={item.amount} total={sumTrans(transactions, item)} favorite={favorite} key={i} screen={screen}/>
                    })
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

export default PlannedContainer;