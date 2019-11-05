const InitialState = {
    category: "Planned"
}

const SET_CATEGORY = 'SET_CATEGORY'

export default function(state = InitialState, action) {
    console.log("hit category State")
    switch(action.type) {
        case SET_CATEGORY:
            return {...state, category: action.payload}

        default: return state;
    }
}