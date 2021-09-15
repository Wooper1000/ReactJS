import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

import {combineReducers, createStore} from "redux";





let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer
})

let store = createStore(reducers);

export default store;