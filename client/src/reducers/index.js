import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import eventsReducer from "./eventsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  events: eventsReducer,
  user: userReducer,
  form: formReducer,
});
