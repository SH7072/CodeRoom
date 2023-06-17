import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import classReducer from "./reducers/classReducer";
import classWorkReducer from "./reducers/classWorkReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        classes: classReducer,
        classWork: classWorkReducer,
    }
});

export default store;