

const SET_CATEGORY = 'SET_CATEGORY'

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}


export const setAddModel = (value) => {
    return {
        type: 'SET_ADD_MODEL',
        payload: value
    }
}