import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  LOADING_ITEMS
} from "../actions/type";
const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.item, ...state.items]
      };
    case LOADING_ITEMS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
