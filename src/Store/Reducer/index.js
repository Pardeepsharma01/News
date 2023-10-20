// import { CombinedState,combineReducers } from "redux";
import { combineReducers } from "redux";
import country from "./country"
const reducer = combineReducers({
  country: country  
})
export default reducer