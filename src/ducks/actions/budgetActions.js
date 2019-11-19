import accountdata from '../../../budget.json'
import transData from '../../../transactions.json'
import moment from 'moment';
import jsonServer from '../../api/jsonServer';


const GET_BUDGET = 'GET_BUDGET';

export const getBudget = () => dispatch => {
    console.log('hit getBudget')
    return async () => {
        const res = await jsonServer.get('/budget');
        dispatch({
            type: GET_BUDGET,
            payload: res.data
        })
    }
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