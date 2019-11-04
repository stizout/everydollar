import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';



const Button = ({title, navigation, view, Icon, iconName}) => {
    const activeRoute = navigation.state.routeName === title;
    if(activeRoute) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(`${view}`)} style={styles.container1}>
                <View style={styles.tab}>
                    <Icon name={iconName} style={activeRoute ? styles.iconActive : styles.iconInactive}/>
                    <Text style={{fontSize: 18}}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={() => navigation.navigate(`${view}`)} style={styles.container2}>
            <View style={styles.tab}>
                <Icon name={iconName} style={activeRoute ? styles.iconActive : styles.iconInactive}/>
                <Text style={{fontSize: 18}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        alignItems: 'center',
        height: 100
    },

    container1: {
        flex: 1,
        alignItems: 'center',
        height: 100
    },
    tab: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },

    iconActive: {
        fontSize: 40,
        color:  '#1A7580'
    },

    iconInactive: {
        color: 'black',
        fontSize: 40,
    }
})

export default withNavigation(Button);