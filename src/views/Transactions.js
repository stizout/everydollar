import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import Searchbar from '../components/Searchbar'
import trans from '../../transactions.json';
import Transaction from '../components/Transaction';
import moment from 'moment';


const Transactions = () => {
    const [filtered, setFiltered] = useState(null);
    const [transactions, setTransactions] = useState(trans);

    console.log(trans.November[0])
    filterTransactions = (input) => {
        // let result = transactions.November.filter((e) => Object.values(e).search(input) > -1)

        console.log(result)
    }
    let month = moment().format("MMMM")
    return (
        <View style={styles.viewContainer}>
            <Searchbar filter={filterTransactions}/>
            <ScrollView>
                {trans[month].map((t, i) => <Transaction 
                                                date={t.date} 
                                                title={t.where} 
                                                category={t.budgetItem} 
                                                amount={t.amount} 
                                                key={i}
                                                />)}
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    }
})

export default Transactions;