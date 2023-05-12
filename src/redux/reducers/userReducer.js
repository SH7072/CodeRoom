import { createReducer, createSlice } from "@reduxjs/toolkit";

const userReducer = createReducer({

}, {
    loginRequest: state => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        // state.token = action.payload.token;
        state.message = action.payload.message;
    },
    loginFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    registerRequest: state => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        // state.isAuthenticated = true;
        // state.user = action.payload.user;
        state.message = action.payload.message;
    },
    registerFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


});

export default userReducer;