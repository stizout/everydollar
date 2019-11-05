

const SET_CATEGORY = 'SET_CATEGORY'

export const setCategory = (category) => {
    console.log("hit category Actions", category)
    return {
        type: SET_CATEGORY,
        payload: category
    }
}