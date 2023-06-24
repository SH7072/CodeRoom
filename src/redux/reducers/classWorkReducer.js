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
        state.classWork = [...state.classWork, action.payload];
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
    editClassWorkRequest: state => {
        state.loading = true;
    },
    editClassWorkSuccess: (state, action) => {
        state.loading = false;
        state.classWork = state.classWork.map(classWork => classWork._id === action.payload._id ? action.payload : classWork);
    },
    editClassWorkFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    deleteClassWorkRequest: state => {
        state.loading = true;
    },
    deleteClassWorkSuccess: (state, action) => {
        state.loading = false;
        state.classWork = state.classWork.filter(classWork => classWork._id !== action.payload._id);
    },
    deleteClassWorkFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default classWorkReducer;