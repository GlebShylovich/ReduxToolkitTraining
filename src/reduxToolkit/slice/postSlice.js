import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'postServ',
    initialState:{
        posts: ['gleb', 'shylovich']
    },
    reducers:{
        setPosts(state, action){
            state.posts = action.payload.posts;
        },
    },
});
export const {setPosts} = postSlice.actions;
export default postSlice.reducer;