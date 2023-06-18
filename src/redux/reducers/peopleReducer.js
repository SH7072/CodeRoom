import { createReducer, createSlice } from "@reduxjs/toolkit";

const peopleReducer = createReducer({
    loading: false,
    teacherList: [],
    studentList: [],
    error: null
}, {
    loadPeopleRequest: (state, action) => {
        state.loading = true;
    },
    loadPeopleSuccess: (state, action) => {
        state.loading = false;
        state.teacherList = action.payload.teachers;
        state.studentList = action.payload.students;
    },
    loadPeopleFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default peopleReducer;