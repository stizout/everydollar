import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlannedContainer from './PlannedContainer';
import budgets from '../../budget.json'
import transactions from '../../transactions.json'

import { connect } from 'react-redux';
import moment from 'moment';
const ScreenMapper = ({ screen, budgets, transactions }) => {
        return (
            <View>
                {budgets.map((budget, i) => {
                    return <PlannedContainer 
                                title={budget.title} 
                                budgetItems={budget.budgetItems} 
                                key={i} 
                                transactions={transactions}
                                screen={screen}
                            />
                })}
            </View>
        )
    //  else if(screen === "Spent") {
    //     return (
    //     <View>
    //             <Category props={propsFeeder("Favorites", budgets)}/>
    //             <Category props={propsFeeder("Giving", budgets)}/>
    //             <Category props={propsFeeder("Housing", budgets)}/>
    //             <Category props={propsFeeder("Transportation", budgets)}/>
    //             <Category props={propsFeeder("Food", budgets)}/>
    //             <Category props={propsFeeder("Personal", budgets)}/>
    //             <Category props={propsFeeder("Lifestyle", budgets)}/>
    //             <Category props={propsFeeder("Health", budgets)}/>
    //             <Category props={propsFeeder("Insurance", budgets)}/>
    //     </View>
    //     )
    // } else if(screen === "Remaining") {
    //     return (
    //         <View>
    //             <Category props={propsFeeder("Favorites", budgets)}/>
    //             <Category props={propsFeeder("Giving", budgets)}/>
    //             <Category props={propsFeeder("Housing", budgets)}/>
    //             <Category props={propsFeeder("Transportation", budgets)}/>
    //             <Category props={propsFeeder("Food", budgets)}/>
    //             <Category props={propsFeeder("Personal", budgets)}/>
    //             <Category props={propsFeeder("Lifestyle", budgets)}/>
    //             <Category props={propsFeeder("Health", budgets)}/>
    //             <Category props={propsFeeder("Insurance", budgets)}/>
    //         </View>
    //     )
    // }
}

const styles = StyleSheet.create({

});

const ms2p = () => ({

});

const md2p = {

}

export default connect(ms2p, md2p)(ScreenMapper);