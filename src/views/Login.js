import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'

const Login = () => {
    return (
        <View style={styles.viewContainer}>
            <Text>Login Page</Text>
            <ViewHeader />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    }
})

export default Login;