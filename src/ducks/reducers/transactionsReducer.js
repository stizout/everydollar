const InitialState = {
    transactions: [],
    isLoggedIn: false,
}

const ADD_TRANSACTION = "ADD_TRANSACTION";
const SET_TRANSACTIONS = "SET_TRANSACTIONS";

export default function(state = InitialState, action) {
    switch(action.type) {
        case SET_TRANSACTIONS:
            return {...state, transactions: action.payload}
    }
    return state;
}

export const addTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    }
}

export const setTransactions = (transactions) => {
    return {
        type: SET_TRANSACTIONS,
        payload: transactions
    }
}

export function numberFormater (amount) {
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