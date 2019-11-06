import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome, } from '@expo/vector-icons';
const Searchbar = ({filter}) => {
    return (
        <View style={styles.container}>
            <FontAwesome name="search" style={styles.icon}/>
            <TextInput placeholder="Search" onChangeText={(input) => filter(input)} style={styles.input}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'yellow',
        borderRadius: 10,
        margin: 10
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        padding: 10
    },
    input: {
        flex: 1,
        fontSize: 20
    },
})

export default Searchbar;