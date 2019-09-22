import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  LOADING_ITEMS
} from "../actions/type";

export const get_items = () => ({
  type: GET_ITEMS
});

export const delete_item = id => ({
  type: DELETE_ITEM,
  id
});

export const add_item = item => ({
  type: ADD_ITEM,
  item
});

export const loading_items = () => ({
  type: LOADING_ITEMS
});
