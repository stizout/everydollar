

const SET_CATEGORY = 'SET_CATEGORY'

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}