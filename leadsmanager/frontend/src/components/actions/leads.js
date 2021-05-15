import axios from "axios";
import { getErrors } from "./errors";
import { ADD_LEAD, CREATE_MESSAGE, DELETE_LEAD, GET_LEADS } from "./types";

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => dispatch({ type: GET_LEADS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(() => {
      dispatch({ type: DELETE_LEAD, payload: id });
      dispatch({
        type: CREATE_MESSAGE,
        payload: { leadDeleted: "Lead Deleted successfully!" },
      });
    })
    .catch((err) => console.log(err));
};

export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch({ type: ADD_LEAD, payload: res.data });
      dispatch({
        type: CREATE_MESSAGE,
        payload: { leadAdded: "Lead Added successfully!" },
      });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};
