import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
        nameUser: null,
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.nameUser = action.payload.nameUser;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.nameUser = null;
        }
    }
});
export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;