import { createReducer, createSlice } from "@reduxjs/toolkit";

const announcementReducer = createReducer({
    loading: false,
    announcementList: [],
    error: null
}, {
    createAnnouncementRequest: (state, action) => {
        state.loading = true;
    },
    createAnnouncementSuccess: (state, action) => {
        state.loading = false;
        state.announcementList = [action.payload, ...state.announcementList]
    },
    createAnnouncementFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    loadAnnouncementsRequest: (state, action) => {
        state.loading = true;
    },
    loadAnnouncementsSuccess: (state, action) => {
        state.loading = false;
        state.announcementList = action.payload;
    },
    loadAnnouncementsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    editAnnouncementRequest: (state, action) => {
        state.loading = true;
    },
    editAnnouncementSuccess: (state, action) => {
        state.loading = false;
        state.announcementList = state.announcementList.map(announcement => {
            if (announcement._id === action.payload._id) {
                return action.payload
            }
            return announcement;
        })
    },
    editAnnouncementFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    deleteAnnouncementRequest: (state, action) => {
        state.loading = true;
    },
    deleteAnnouncementSuccess: (state, action) => {
        state.loading = false;
        state.announcementList = state.announcementList.filter(announcement => announcement._id !== action.payload._id);
    },
    deleteAnnouncementFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default announcementReducer;