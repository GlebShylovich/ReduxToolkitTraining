import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice'
import postSlice from "./slice/postSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { postApi } from "./queryApi/postsPlaceholder";
export const store = configureStore({
    reducer: {
        user: userReducer,
        postServ: postSlice,
        [postApi.reducerPath]:postApi.reducer,
    },
    middleware:(getDefault) => getDefault().concat(postApi.middleware)
})
setupListeners(store.dispatch)