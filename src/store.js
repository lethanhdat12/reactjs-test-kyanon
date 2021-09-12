
import { createStore , combineReducers } from "redux";
import AppReducer from "./redux/Reducers/AppReducers";
import EmployeeReducer from "./redux/Reducers/EmployeeReducers";
const store = combineReducers({
    AppReducer : AppReducer,
    EmployeeReducer : EmployeeReducer
})

export default createStore(store);