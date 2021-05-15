import { GET_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ERRORS:
      return { ...state, msg: payload.msg, status: payload.status };

    default:
      return state;
  }
};
