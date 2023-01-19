import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import postsReducer from "./postsReducer";
import quantityReducer from "./quantityReducer";

export default combineReducers({
  counter: counterReducer,
  quantity: quantityReducer,
  posts: postsReducer
})