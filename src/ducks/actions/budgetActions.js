import moment from 'moment';


const GET_BUDGET = 'GET_BUDGET';

export const setMonth = () => {
    return {
        type: SET_MONTH,
        payload: moment().format("MMMM")
    }
}