import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const CategoryView = () => {
    return (
        <View style={styles.viewContainer}>
            <Text>Does this work???</Text>
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