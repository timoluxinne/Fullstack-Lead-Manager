import { CREATE_MESSAGE } from "../actions/types"


export default (state = {}, { type, payload }) => {
    switch (type) {

    case CREATE_MESSAGE:
        return (state=payload)

    default:
        return state
    }
}
