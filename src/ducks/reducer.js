import { combineReducers } from 'redux';
import categoryReducer from './reducers/categoryReducer';
import transactionsReducer from './reducers/transactionsReducer';


export default combineReducers({
    category: categoryReducer,
    trans: transactionsReducer
})