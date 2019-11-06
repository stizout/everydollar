import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar'

const CategoryView = () => {
    return (
        <View style={styles.viewContainer}>
            <Text>Does this work???</Text>
            <Searchbar />
            <Footer />
        </View>
    )
}


const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
})

export default CategoryView;