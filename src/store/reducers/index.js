import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
const Reducers = combineReducers({
  home: homeReducer,
});
export default Reducers;
