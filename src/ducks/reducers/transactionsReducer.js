const InitialState = {
    transactions: ['1', '2'],
    isLoggedIn: false,
}

const ADD_TRANSACTION = "ADD_TRANSACTION";

export default function(state = InitialState, action) {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {...state, budget: action.payload}
    }
    return state;
}



export const addTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    }
}