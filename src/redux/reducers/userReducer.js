import { createReducer, createSlice } from "@reduxjs/toolkit";

const userReducer = createReducer({

}, {
    loginRequest: state => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.userId;
        state.token = action.payload.token;
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
    loadUserRequest: state => {
        state.loading = true;
    },
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    clearError: state => {
        state.error = null;
    },
    clearMessage: state => {
        state.message = null;
    },

    addClassesAsTeacher: (state, actions) => {
        state.user = actions.payload;
    },
    addClassesAsStudent: (state, actions) => {
        state.user = actions.payload;
    }


});

export default userReducer;