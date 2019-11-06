import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import NavigationOptions from './NavigationOptions';



const BudgetItem = ({screen, total,title, amount, favorite, navigation}) => {

    // Format amount coming in
    const [amountformatted, setAmount] = useState(numberFormater(amount));
    // Saves Original Amount when onFocus
    const [tempAmount, setTempAmount] = useState('');
    // Saves user input when typing
    const [newAmount, setNewAmount] = useState(null);
    const [newTitle, setNewTitle] = useState(title);

    handleAmountChange = () => {
        if(newAmount) {
            setAmount(numberFormater(newAmount))
        } else {
            setAmount(tempAmount);
        }
    }
    handleTypeAhead = (input) => {
        setNewAmount(input);
        setAmount(input)
    }

    handleTempAmount = () => {
        setTempAmount(amountformatted);
        setAmount('')
    }
    return (
        <View style={styles.viewContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CategoryView', {category: ''})} disabled={screen !== "Planned"}>
                <View style={styles.lineItem}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        { favorite ? <FontAwesome name="star" style={styles.star}/> : null }
                        <TextInput onChangeText={(text) => setNewTitle(text)}>{newTitle}</TextInput>
                    </View>
                    {screen === "Planned" ? 
                    <TextInput 
                        placeholder={tempAmount}
                        onFocus={handleTempAmount} 
                        onChangeText={(text) => handleTypeAhead(numberFormater(text))} 
                        onBlur={handleAmountChange} 
                        >
                        {amountformatted}
                    </TextInput> :
                    <Text>{numberFormater(total.toString())}</Text>}
                </View>
            </TouchableOpacity>
            <View style={styles.hr}/>
        </View>
    )
}

function numberFormater (amount) {
    let removeChar = amount.replace(/[&/\\$,.]/g, '');
    let number = removeChar.split('');
    if(number.length === 0 || amount === '0') {
        return "$0.00"
    } else if(number.length === 6) {
        number.splice(1, 0, ',');
    } else if(number.length === 7) {
        number.splice(2, 0, ',');
    } else if(number.length === 8) {
        number.splice(3, 0, ',');
    } else if(number.length === 9) {
        number.splice(1, 0, ',');
        number.splice(5, 0, ',');
    }
    number.splice(number.length -2 , 0, ".");
    number.splice(0, 0, "$");
    return number.join('');
}

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#fff',
        marginBottom: 5,
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: .5,
        marginHorizontal: 20
    },
    lineItem: {
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    star: {
        color: '#F5D633',
        marginHorizontal: 5,
        fontSize: 20
    }
})

export default withNavigation(BudgetItem);