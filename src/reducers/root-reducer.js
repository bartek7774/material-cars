import { combineReducers } from "redux";
import eventReducer from "./event-reducer";
import userReducer from "./user-reducer";

export default combineReducers({
  user: userReducer,
  cars: eventReducer
});
