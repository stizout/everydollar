import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const BudgetItem = ({title, amount}) => {
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
            <View style={styles.lineItem}>
                <TextInput onChangeText={(text) => setNewTitle(text)}>{newTitle}</TextInput>
                <TextInput 
                    placeholder={tempAmount}
                    onFocus={handleTempAmount} 
                    onChangeText={(text) => handleTypeAhead(numberFormater(text))} 
                    onBlur={handleAmountChange} 
                    >
                    {amountformatted}
                </TextInput>
            </View>
            <View style={styles.hr}/>
        </View>
    )
}

function numberFormater (amount) {
    console.log(amount)
    let removeChar = amount.replace(/[&/\\$,.]/g, '');
    let number = removeChar.split('');
    if(number.length === 0) {
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
    // return format.toFixed(2);
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
    }
})

export default BudgetItem;