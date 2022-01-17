import { combineReducers } from "redux";
import QRScreenReducer from "./QRScreenReducer";
import ViewNoteScreenReducer from "./ViewNoteScreenReducer";

const RootReducer = combineReducers({
    userdetails : QRScreenReducer,
    usernotes : ViewNoteScreenReducer,
});

export default RootReducer;