import { combineReducers } from "redux";
import QRScreenReducer from "./QRScreenReducer";
import AddNoteScreenReducer from "./AddNoteScreenReducer";

const RootReducer = combineReducers({
    userdetails : QRScreenReducer,
    usernotes : AddNoteScreenReducer,
});

export default RootReducer;