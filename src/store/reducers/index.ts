import { combineReducers } from "redux";
import userReducer from "./userReducer";
import commentsReducer from "./commentsReducer";
import { todosReducer } from "./todosReducer";

export const rootReducers = combineReducers({
    user: userReducer,
    comments: commentsReducer,
    todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducers>
