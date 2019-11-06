import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getBudget, getTransactions } from '../ducks/actions/budgetActions';
import ScreenMapper from '../components/ScreenMapper';
import transactions from '../../transactions.json'
import budgetArr from '../../budget.json'



const RootHome = ({navigation, category}) => {
    const { november: {budgetCategories} } = budgetArr;
      if(!budgetCategories) {
          return <Text>Loading</Text>
      }
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

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#F5F7F8'
    }
});

let Home = withNavigation(RootHome);
const mapStateToProps = (state) => ({
    category: state.category,
    trans: state.trans
});

export default connect(mapStateToProps, { getBudget, getTransactions })(Home);