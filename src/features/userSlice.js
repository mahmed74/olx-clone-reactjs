import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from 'react-redux';
// import configureStore from '../store/action/index'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null;
        },
    },
});


export const { login, logout } = userSlice.actions;


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;