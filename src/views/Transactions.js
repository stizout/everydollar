import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'

const Transactions = () => {
    return (
        <View style={styles.viewContainer}>
            <ViewHeader />
            <Text>Transactions Page</Text>
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