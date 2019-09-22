import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  LOADING_ITEMS
} from "../actions/type";
import axios from "axios";

export const get_items = () => dispatch => {
  dispatch(loading_items());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const delete_item = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const add_item = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const loading_items = () => ({
  type: LOADING_ITEMS
});
