const InitialState = {
    category: "Planned",
    showAddModel: false,
}

const SET_CATEGORY = 'SET_CATEGORY'

export default function(state = InitialState, action) {
    switch(action.type) {
        case SET_CATEGORY:
            return {...state, category: action.payload}
        case 'SET_ADD_MODEL':
            return {...state, showAddModel: action.payload}
        default: return state;
    }
}