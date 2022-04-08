import {combineReducers} from "redux";
import userReducer from "./users/userReducer";

export const rootReducers = combineReducers({
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducers>
