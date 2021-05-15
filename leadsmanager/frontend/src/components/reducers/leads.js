import { ADD_LEAD, DELETE_LEAD, GET_LEADS } from "../actions/types"

const initialState = {
    leads: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_LEADS:
        return { ...state, leads: payload }

    case DELETE_LEAD:
        return {
            ...state,
            leads: state.leads.filter(lead => lead.id != payload)
        }
    case ADD_LEAD:
        return {
            ...state,
            leads: [...state.leads, payload]
        }
    default:
        return state
    }
}
