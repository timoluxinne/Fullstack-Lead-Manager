import { GET_ERRORS } from "./types";

export const getErrors = (msg, status) => ({
    type: GET_ERRORS,
    payload: {
        msg,
        status
    }   
})