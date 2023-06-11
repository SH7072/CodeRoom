import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import classReducer from "./reducers/classReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        classes: classReducer,
    }
});

export default store;