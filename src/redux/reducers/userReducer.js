import { createReducer, createSlice } from "@reduxjs/toolkit";

const userReducer = createReducer({
    loading: false,
    user: null,
    error: null,
    message: null
}, {
    loginRequest: state => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        localStorage.setItem("isUserAuthenticated", true);
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.userId;
        state.message = action.payload.message;
    },
    loginFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        localStorage.removeItem("isUserAuthenticated");
    },
    registerRequest: state => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
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
        localStorage.setItem("isUserAuthenticated", true);
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        localStorage.removeItem("isUserAuthenticated");
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
    },
    logoutRequest: state => {
        state.loading = true;
    },
    logoutSuccess: state => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = null;
        localStorage.removeItem("isUserAuthenticated");
    },
    logoutFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    unenrollFromClassRequest: state => {
        state.loading = true;
    },
    unenrollFromClassSuccess: (state, action) => {
        state.loading = false;
        state.user.classesAsStudent = state.user.classesAsStudent.filter(class_ => class_.classId !== action.payload);
    },
    unenrollFromClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    archiveClassRequest: state => {
        state.loading = true;
    },
    archiveClassSuccess: (state, action) => {
        state.loading = false;
        state.user.classesAsTeacher = state.user.classesAsTeacher.filter((class_) => {
            if (class_.classId === action.payload) {
                class_.isArchived = true;
            }
            return class_;
        }
        );
        state.user.classesAsStudent = state.user.classesAsStudent.filter((class_) => {
            if (class_.classId === action.payload) {
                class_.isArchived = true;
            }
            return class_;
        }
        );
    },
    archiveClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },



});

export default userReducer;