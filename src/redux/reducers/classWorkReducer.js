import { createReducer, createSlice } from "@reduxjs/toolkit";

const classWorkReducer = createReducer({}, {
    createClassWorkRequest: state => {
        state.loading = true;
    },
    createClassWorkSuccess: (state, action) => {
        state.loading = false;
        state.classWork = action.payload;
    },
    createClassWorkFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
});

export default classWorkReducer;