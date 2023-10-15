import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";
import { combineReducers } from "./postsReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})