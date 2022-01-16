import { combineReducers } from "redux";
import QRScreenReducer from "./QRScreenReducer";

const RootReducer = combineReducers({
    userdetails : QRScreenReducer,
});

export default RootReducer;