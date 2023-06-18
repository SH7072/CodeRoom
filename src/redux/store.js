import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import classReducer from "./reducers/classReducer";
import classWorkReducer from "./reducers/classWorkReducer";
import announcementReducer from "./reducers/announcementReducer";
import peopleReducer from "./reducers/peopleReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        classes: classReducer,
        classWork: classWorkReducer,
        announcements: announcementReducer,
        people: peopleReducer,
    }
});

export default store;