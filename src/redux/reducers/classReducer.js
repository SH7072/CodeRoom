import { createReducer, createSlice } from "@reduxjs/toolkit";

const classReducer = createReducer({

}, {
    createClassRequest: state => {
        state.loading = true;
    },
    createClassSuccess: (state, action) => {
        state.loading = false;
        state.class = action.payload.class;
    },
    createClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    loadClassRequest: state => {
        state.loading = true;
    },
    loadClassSuccess: (state, action) => {
        state.loading = false;
        state.class = action.payload;
    },
    loadClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default classReducer;