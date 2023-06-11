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
        state.classInfo = action.payload;
    },
    loadClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    joinClassRequest: state => {
        state.loading = true;
    },
    joinClassSuccess: (state, action) => {
        state.loading = false;
    },
    joinClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    getAllClassRoomsRequest: state => {
        state.loading = true;
    },
    getAllClassRoomsSuccess: (state, action) => {
        state.loading = false;
        state.classes = action.payload;
    },
    getAllClassRoomsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


});

export default classReducer;