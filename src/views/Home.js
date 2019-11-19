import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { setBudget } from '../ducks/reducers/budgetReducer';
import { setTransactions } from '../ducks/reducers/transactionsReducer';
import ScreenMapper from '../components/ScreenMapper';
import budgetArr from '../../budget.json'
import jsonServer from '../api/jsonServer';
import AddTransaction from './AddTransaction';
import UnTrackedBubble from '../components/UnTrackedBubble';




const RootHome = ({navigation, category, setBudget, budget, setTransactions}) => {
    const [ budget2, setTempBudget ] = useState([]);
    const [ transactions, setTempTransactions ] = useState([]);
    const { november: {budgetCategories} } = budgetArr;
    const [ unTracked, setUnTracked ] = useState([]);
    const [ refreshing, setRefreshing ] = useState(false);
    useEffect(() => {
        if(budget) {
            jsonServer.get('/budget').then(res => {
                setTempBudget(res.data.november.budgetCategories);
                setBudget(res.data);
                jsonServer.get('/transactions').then(response => {
                    setTempTransactions(response.data);
                    setTransactions(response.data);
                    let unTrackedTransactions = response.data.filter(e => e.budgetCategory === null);
                    setUnTracked(unTrackedTransactions);
                })
            });
        }
    }, []);

    onRefresh = () => {
        setRefreshing(true);

    }

    refreshData = () => {
        jsonServer.get('/transactions').then(response => {
            setTempTransactions(response.data);
            setTransactions(response.data);
            let unTrackedTransactions = response.data.filter(e => e.budgetCategory === null);
            setUnTracked(unTrackedTransactions);
            setTimeout(() => {
                setRefreshing(false);
            }, 2000)
        })
    }
      if(budget2.length === 0) {
          return <Text>Loading</Text>
      }

      if(category.showAddModel) {
          return <AddTransaction />
      } else {
          return (
              <View style={styles.viewContainer}>
                  <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>}>
                      <ViewHeader title="Monthly Income" budget={budgetCategories[0]}/>
                      <ScreenMapper screen={category.category} budgets={budget2} transactions={transactions} />
                  </ScrollView>
                  <UnTrackedBubble unTracked={unTracked} budgetCategories={budget2} refreshData={refreshData}/>
                  <Footer />
              </View>
          )
      }

}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#F5F7F8'
    }
});

let Home = withNavigation(RootHome);
const mapStateToProps = (state) => ({
    category: state.category,
    trans: state.trans,
    budget: state.budget,
});

export default connect(mapStateToProps, {setBudget, setTransactions})(Home);