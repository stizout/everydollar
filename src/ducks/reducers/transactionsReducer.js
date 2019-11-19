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