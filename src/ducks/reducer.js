import { combineReducers } from 'redux';
import categoryReducer from './reducers/categoryReducer';
import transactionsReducer from './reducers/transactionsReducer';
import budgetReducer from './reducers/budgetReducer';


export default combineReducers({
    category: categoryReducer,
    trans: transactionsReducer,
    budget: budgetReducer
})