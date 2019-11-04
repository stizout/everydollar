import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome, } from '@expo/vector-icons';
import { MaterialIcons, } from '@expo/vector-icons';
import Button from './Button';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Button title={"Home"} view={"Home"} style={styles.button} Icon={FontAwesome} iconName="money"/>
            <Button title={"Transactions"} view={"Transactions"} Icon={FontAwesome} iconName="money"/>
            <Button title={"Login"} view={"Login"} Icon={FontAwesome} iconName="money"/>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#F5F7F8'
    },

    button: {
        backgroundColor: 'orange',
    }
})

export default withNavigation(Footer);