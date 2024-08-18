import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter.slice";
import usersReducer from '../slices/user.slice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    }
});

export default store;