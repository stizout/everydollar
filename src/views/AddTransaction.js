import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { setAddModel } from '../ducks/actions/categoryActions';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome, } from '@expo/vector-icons';
import Footer from '../components/Footer';
import ViewHeader from '../components/ViewHeader'
import Searchbar from '../components/Searchbar'
import trans from '../../transactions.json';
import Transaction from '../components/Transaction';
import moment from 'moment';
import jsonServer from '../api/jsonServer';

class AddTransaction extends React.Component {
    constructor() {
        super();
        this.state = {
            day: moment().format('d'),
            month: moment().format('MM'),
            year: moment().format('YYYY'),
            type: 'expense',
            amount: null,
            budgetCategory: null,
            budgetItem: null,
            notes: null,
            showBudgetModel: false,
            budgetCategories: [],
            merchant: null,
        }
    }
    setDate = (att, value) => {
        switch(att) {
            case 'month':
                this.setState({month: value})
                break;
            case 'day':
                this.setState({day: value})
                break;
            case 'year':
                this.setState({year: value})
                break;
        }
    }

    showBudgetModel = () => {
        jsonServer.get('/budget').then(res => {
            this.setState({
                budgetCategories: res.data.november.budgetCategories,
                showBudgetModel: true,
            })
        });
    }

    submitTransaction = () => {
        let newTransaction = {
            category: "expense",
            date: "11/18/19",
            amount: "5012",
            where: "Frys",
            budgetCategory: "Food",
            budgetItem: "Groceries",
            notes: "",
            monthId: 11
        }
        jsonServer.post('/transactions', newTransaction);
    }

    handleCategory = (e, ele) => {
        this.setState({
            budgetCategory: e.title,
            budgetItem: ele.title,
            showBudgetModel: false
        })
    }

    handleSubmitTransaction = () => {
        const {day, month, year, type, showBudgetModel, budgetCategory, notes, amount, budgetItem, merchant } = this.state;

        let newTransaction = {
            category: type,
            date: `${month}/${day}/${year}`,
            amount,
            where: merchant,
            budgetCategory,
            budgetItem,
            notes,
            monthId: +month
        }
        jsonServer.post('/transactions', newTransaction).then(() => {
            this.props.setAddModel(false)
        })
    }

    render() {
        const { day, month, year, type, showBudgetModel, budgetCategories, amount, notes, budgetItem, merchant } = this.state;
        console.log(this.state)
        return (
            <View style={styles.viewContainer}>
                <TouchableOpacity onPress={() => this.props.setAddModel(false)}>
                    <FontAwesome name="close" style={{fontSize: 35}}/>
                </TouchableOpacity>
                <View style={styles.typeRow}>
                    <TouchableOpacity onPress={() => this.setState({type: 'expense'})} disabled={type === 'expense'} style={type === 'expense' ? styles.typeActive : styles.typeInactive}>
                        <Text style={{fontSize: 20}}>Expense</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({type: 'income'})} disabled={type === 'income'} style={type === 'income' ? styles.typeActive : styles.typeInactive}>
                        <Text style={{fontSize: 20}}>Income</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hr}/>
                <View style={{width: 300, flexDirection: 'column', flex: .5, marginTop: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Date</Text>
                        <View style={styles.rowMonth}>
                            <RNPickerSelect
                                onValueChange={(value) => this.setDate('month', value)}
                                value={month}
                                items={[
                                    { label: 'January', value: '01' },
                                    { label: 'February', value: '02' },
                                    { label: 'March', value: '03' },
                                    { label: 'April', value: '04' },
                                    { label: 'May', value: '05' },
                                    { label: 'June', value: '06' },
                                    { label: 'July', value: '07' },
                                    { label: 'August', value: '08' },
                                    { label: 'September', value: '09' },
                                    { label: 'October', value: '10' },
                                    { label: 'November', value: '11' },
                                    { label: 'December', value: '12' },
                                ]}
                            />
                            <RNPickerSelect
                                onValueChange={(value) => this.setDate('day', value)}
                                value={day}
                                items={[
                                    { label: '1', value: '1' },
                                    { label: '2', value: '2' },
                                    { label: '3', value: '3' },
                                    { label: '4', value: '4' },
                                    { label: '5', value: '5' },
                                    { label: '6', value: '6' },
                                    { label: '7', value: '7' },
                                    { label: '8', value: '8' },
                                    { label: '9', value: '9' },
                                    { label: '10', value: '10' },
                                    { label: '11', value: '11' },
                                    { label: '12', value: '12' },
                                    { label: '13', value: '13' },
                                    { label: '14', value: '14' },
                                    { label: '15', value: '15' },
                                    { label: '16', value: '16' },
                                    { label: '17', value: '17' },
                                    { label: '18', value: '18' },
                                    { label: '19', value: '19' },
                                    { label: '20', value: '20' },
                                    { label: '21', value: '21' },
                                    { label: '22', value: '22' },
                                    { label: '23', value: '23' },
                                    { label: '24', value: '24' },
                                    { label: '25', value: '25' },
                                    { label: '26', value: '26' },
                                    { label: '27', value: '27' },
                                    { label: '28', value: '28' },
                                    { label: '29', value: '29' },
                                    { label: '30', value: '30' },
                                    { label: '31', value: '31' },
                                ]}
                                style={{marginHorizontal: 5}}
                            />
                        <RNPickerSelect
                                onValueChange={(value) => this.setDate('year', value)}
                                style={{fontSize: 20}}
                                value={year}
                                items={[
                                    { label: '2018', value: '2018' },
                                    { label: '2019', value: '2019' },
                                ]}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Amount</Text>
                        <TextInput placeholder="0.00" onChangeText={(value) => this.setState({amount: value})} value={amount}/>
                    </View>
                    <TouchableOpacity style={styles.row} onPress={() => this.showBudgetModel()}>
                        <Text style={styles.label}>Category</Text>
                        <Text>{budgetItem}</Text>
                        <FontAwesome name="arrow-right"  style={{marginLeft: 190, fontSize: 20}}/>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text style={styles.label}>Merchant</Text>
                        <TextInput placeholder="Name" onChangeText={(value) => this.setState({merchant: value})} value={merchant}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Notes</Text>
                        <TextInput placeholder="Notes about the transaction" onChangeText={(value) => this.setState({notes: value})} value={notes}/>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.handleSubmitTransaction()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                {showBudgetModel ?
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity onPress={() => this.setState({showBudgetModel: false})}>
                            <FontAwesome name="close" style={{fontSize: 35}}/>
                        </TouchableOpacity>
                        {budgetCategories.map((e, i) => {
                            return e.budgetItems.map(ele => {
                                return (
                                    <TouchableOpacity onPress={() => this.handleCategory(e, ele)} key={ele.title}>
                                        <Text style={{textAlign: 'center'}}>{ele.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        })}
                    </View>
                : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        fontSize: 20,
        marginVertical: 8,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        marginHorizontal: 5,
        marginRight: 5,
    },
    rowMonth: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        paddingTop: 4,
        fontSize: 20,
        justifyContent: 'space-evenly',
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%'
    },
    typeRow: {
        flexDirection: 'row',
        marginVertical: 8,
        width: 160,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    typeActive: {
        backgroundColor: '#1d6321',
        padding: 5
    },
    typeInactive: {
        padding: 5
    },
    categoryContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        position: 'absolute',
    }
})

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {setAddModel})(AddTransaction);