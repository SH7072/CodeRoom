import { createReducer, createSlice } from "@reduxjs/toolkit";

const classReducer = createReducer({
    loading: false,
    classInfo: null,
    classes: null,
    error: null,
    role: null
}, {
    createClassRequest: state => {
        state.loading = true;
    },
    createClassSuccess: (state, action) => {
        state.loading = false;
        state.classInfo = action.payload;
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
        state.classInfo = action.payload.class;
        state.role = action.payload.role;
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
    logoutRequest: state => {
        state.loading = true;
    },
    logoutSuccess: (state, action) => {
        state.loading = false;
        state.classInfo = null;
        state.classes = null;
    },
    logoutFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    editClassRequest: state => {
        state.loading = true;
    },
    editClassSuccess: (state, action) => {
        state.loading = false;
        state.classes.classesAsTeacher.map((class_) => {
            if (class_.classId._id === action.payload._id) {
                console.log(class_.classId, "class_.classId");
                class_.classId = action.payload;
            }
        });
    },
    editClassFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    unenrollFromClassRequest: state => {
        state.loading = true;
    },
    unenrollFromClassSuccess: (state, action) => {
        state.loading = false;
        state.classes.classesAsStudent = state.classes.classesAsStudent.filter((class_) => class_.classId._id !== action.payload);
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
        state.classes.classesAsTeacher = state.classes.classesAsTeacher.filter((class_) => {
            if (class_.classId._id === action.payload) {
                class_.isArchived = true;
            }
            return class_;
        }
        );
        state.classes.classesAsStudent = state.classes.classesAsStudent.filter((class_) => {
            if (class_.classId._id === action.payload) {
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

export default classReducer;