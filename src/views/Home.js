import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getTransactions } from '../ducks/actions/budgetActions';
import { getBudget } from '../ducks/reducers/budgetReducer';
import ScreenMapper from '../components/ScreenMapper';
import transactions from '../../transactions.json'
import budgetArr from '../../budget.json'
import { bindActionCreators } from 'redux'
import jsonServer from '../api/jsonServer';
import AddTransaction from './AddTransaction';




const RootHome = ({navigation, category, getBudget, budget}) => {
    const [ budget2, setBudget ] = useState([]);
    const { november: {budgetCategories} } = budgetArr;
    useEffect(() => {
        if(budget) {
            jsonServer.get('/budget').then(res => {
                getBudget(res.data)
            });
        }
    }, []);
      if(!budgetCategories) {
          return <Text>Loading</Text>
      }

      if(category.showAddModel) {
          return <AddTransaction />
      } else {
          return (
              <View style={styles.viewContainer}>
                  <ScrollView>
                      <ViewHeader title="Monthly Income" budget={budgetCategories[0]}/>
                      <ScreenMapper screen={category.category} budgets={budgetCategories} transactions={transactions} />
                  </ScrollView>
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
    budget: state.budget
});

export default connect(mapStateToProps, {getBudget,getTransactions})(Home);