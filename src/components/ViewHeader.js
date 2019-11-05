import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewHeader = ({title, budget}) => {
    let arr = [];
    for(let i = 0; i < budget.length; i++) {
        arr.push(budget[i].amount);
    }
    const [total, setTotal] = useState(arr.reduce((a,b) => +a + +b, 0))
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{total}</Text>
            <View style={styles.hr}/>
        </View>
    )
}


const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: .5,
        marginHorizontal: 10
    }
})

export default ViewHeader;