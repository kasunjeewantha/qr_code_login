import { combineReducers } from "redux";
import QRScreenReducer from "./QRScreenReducer";
import ViewNoteScreenReducer from "./ViewNoteScreenReducer";
import AddNoteScreenReducer from "./AddNoteScreenReducer";

const RootReducer = combineReducers({
    userdetails : QRScreenReducer,
    usernotes : ViewNoteScreenReducer,
    usernotesloading : AddNoteScreenReducer,
});

export default RootReducer;