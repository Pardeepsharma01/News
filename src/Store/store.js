import{applyMiddleware,createStore} from "redux"
import thunk from "redux-thunk";
import reducer from "./Reducer"

const shop = createStore(reducer,{},applyMiddleware(thunk))
export default shop