import counterReducer from "./counter"
import todosReducers from "./todos"
import { combineReducers } from "redux"
const allReducers = combineReducers({
    counterReducer,
    todosReducers
})
export default allReducers