import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {combineReducers, createStore} from "redux";




let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})

let store = createStore(reducers);

export default store;