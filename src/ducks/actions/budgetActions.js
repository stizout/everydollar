import accountdata from '../../../budget.json'
import transData from '../../../transactions.json'
import moment from 'moment';


const GET_BUDGET = 'GET_BUDGET';

export const getBudget = () => dispatch => {
    return accountdata
}

export const getTransactions = () => {
    return transData;
}

export const setMonth = () => {
    return {
        type: SET_MONTH,
        payload: moment().format("MMMM")
    }
}