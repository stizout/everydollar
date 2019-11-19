// import accountdata from '../../../budget.json'
// import transData from '../../../transactions.json'
import moment from 'moment';
import jsonServer from '../../api/jsonServer';

const InitialState = {
    budget: [],
}

const GET_BUDGET = 'GET_BUDGET';

export default function(state = InitialState, action) {
    switch(action.type) {
        case GET_BUDGET:
            return {...state, budget: action.payload}
    }
    return state;
}


export const setBudget = (budget) => {
    return {
        type: GET_BUDGET,
        payload: budget
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