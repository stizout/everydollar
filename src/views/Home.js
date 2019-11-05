import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getBudget } from '../ducks/actions/budgetActions';
import ScreenMapper from '../components/ScreenMapper';


const RootHome = ({navigation, trans, category, getBudget}) => {
    const [budgets, setBudgets ] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            let budget = getBudget();
            setBudgets(budget.budgets)
        } catch {
            setError('Something went Wrong');
        }
      });
      if(!budgets) {
          return <Text>Loading</Text>
      }
    return (
        <View style={styles.viewContainer}>
            <ScrollView>
                {budgets.length > 0 ?
                    <ViewHeader title="Monthly Income" budget={budgets[0].lineItems}/>
                :
                    null
                }
                {error && <Text>{error}</Text>}
                <ScreenMapper screen={category.category} budgets={budgets}/>
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