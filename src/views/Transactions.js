import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import Searchbar from '../components/Searchbar'
import trans from '../../transactions.json';
import Transaction from '../components/Transaction';
import moment from 'moment';
import AddTransaction from './AddTransaction';


const Transactions = ({t, category}) => {
    if(category.showAddModel) {
        return <AddTransaction />
    } else {
        return (
            <View style={styles.viewContainer}>
                <Searchbar />
                <ScrollView style={{marginBottom: 150}}>
                    {t.transactions.map((t, i) => <Transaction 
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
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    }
});

const mapStateToProps = state => ({
    t: state.trans,
    category: state.category,

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);