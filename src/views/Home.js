import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import Debt from '../components/Debt';
import Favorites from '../components/Favorites';
import Food from '../components/Food';
import Giving from '../components/Giving';
import Health from '../components/Health';
import Income from '../components/Income';
import Insurance from '../components/Insurance';
import LifeStyle from '../components/LifeStyle';
import Savings from '../components/Savings';
import Personal from '../components/Personal';
import Transportation from '../components/Transportation';
import Housing from '../components/Housing';
import accountdata from '../../account.json'
import BudgetItem from '../components/BudgetItem';
import ComponentPicker from '../components/ComponentPicker';

const Home = () => {
    const [account, setAccount ] = useState([])
    const [budgets, setBudgets ] = useState([])
    useEffect(() => {
        try {
            setAccount(accountdata);
            setBudgets(accountdata.budgets)
        } catch {
            console.log('error')
        }
      });
      const propsFeeder = (component, budgets) => {
        return budgets.filter((budget) => budget.title === component);
      }
    return (
        <View style={styles.viewContainer}>
            <ScrollView>
                {budgets.length > 0 ?
                    <ViewHeader title="Monthly Income" budget={budgets[0].lineItems}/>
                :
                    null
                }
                
                {budgets.length > 0 ? <View>
                    <Income props={propsFeeder("Income", budgets)} />
                    <Income props={propsFeeder("Favorites", budgets)}/>
                    <Income props={propsFeeder("Housing", budgets)}/>
                    <Income props={propsFeeder("Transportation", budgets)}/>
                    <Income props={propsFeeder("Food", budgets)}/>
                    <Income props={propsFeeder("Personal", budgets)}/>
                    <Income props={propsFeeder("Lifestyle", budgets)}/>
                    <Income props={propsFeeder("Health", budgets)}/>
                    <Income props={propsFeeder("Insurance", budgets)}/>

                </View>
                : null }
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#F5F7F8'
    }
})

export default Home;