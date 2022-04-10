import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import commentsReducer from "./comments/commentsReducer";
import { todosReducer } from "./todos/todosReducer";

export const rootReducers = combineReducers({
    user: userReducer,
    comments: commentsReducer,
    todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducers>
