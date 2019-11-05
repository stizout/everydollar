import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Category from './Category';
const ScreenMapper = ({ screen, budgets }) => {

    const propsFeeder = (component, budgets) => {
    return budgets.filter((budget) => budget.title === component);
    }
    console.log('screenmapper', screen)

    if(screen === "Planned") {
        return (
            <View>
                <Category props={propsFeeder("Income", budgets)}/>
                <Category props={propsFeeder("Favorites", budgets)}/>
                <Category props={propsFeeder("Giving", budgets)}/>
                <Category props={propsFeeder("Housing", budgets)}/>
                <Category props={propsFeeder("Transportation", budgets)}/>
                <Category props={propsFeeder("Food", budgets)}/>
                <Category props={propsFeeder("Personal", budgets)}/>
                <Category props={propsFeeder("Lifestyle", budgets)}/>
                <Category props={propsFeeder("Health", budgets)}/>
                <Category props={propsFeeder("Insurance", budgets)}/>
            </View>
        )
    } else if(screen === "Spent") {
        return (
        <View>
            <Category props={propsFeeder("Income", budgets)}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default ScreenMapper;