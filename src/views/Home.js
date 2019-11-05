import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import Category from '../components/Category';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getBudget } from '../ducks/actions/budgetActions';


const RootHome = ({navigation, trans, category, getBudget}) => {
    const [budgets, setBudgets ] = useState(null);
    const [view, setView] = useState('Planned');
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            let budget = getBudget();
            setBudgets(budget.budgets)
        } catch {
            setError('Something went Wrong');
        }
      });
      const propsFeeder = (component, budgets) => {
        return budgets.filter((budget) => budget.title === component);
      }
    //   console.log(view);
    //   console.log('is this here??', category);
    //   console.log('is this here??', trans);
      const handleBudget = (input) => {
          console.log(input)
      }
      if(!budgets) {
          return <Text>Loading</Text>
      }
      console.log('monthly income?', budgets)
    return (
        <View style={styles.viewContainer}>
            <ScrollView>
                {budgets.length > 0 ?
                    <ViewHeader title="Monthly Income" budget={budgets[0].lineItems}/>
                :
                    null
                }
                {error && <Text>{error}</Text>}
                {budgets.length > 0 ? <View>
                    <Category props={propsFeeder("Income", budgets)}/>
                    <Category props={propsFeeder("Favorites", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Giving", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Housing", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Transportation", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Food", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Personal", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Lifestyle", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Health", budgets)} handleBudget={handleBudget}/>
                    <Category props={propsFeeder("Insurance", budgets)} handleBudget={handleBudget}/>

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
});

let Home = withNavigation(RootHome);
const mapStateToProps = (state) => ({
    category: state.category,
    trans: state.trans
});

export default connect(mapStateToProps, { getBudget })(Home);