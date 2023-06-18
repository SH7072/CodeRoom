import { createReducer, createSlice } from "@reduxjs/toolkit";

const classWorkReducer = createReducer({
    loading: false,
    classWork: [],
    error: null
}, {
    createClassWorkRequest: state => {
        state.loading = true;
    },
    createClassWorkSuccess: (state, action) => {
        state.loading = false;
        state.classWork = state.classWork.push(action.payload);
    },
    createClassWorkFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    loadClassWorkRequest: state => {
        state.loading = true;
    },
    loadClassWorkSuccess: (state, action) => {
        state.loading = false;
        state.classWork = action.payload;
    },
    loadClassWorkFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default classWorkReducer;