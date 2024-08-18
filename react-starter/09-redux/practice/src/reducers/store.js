import { createStore } from "redux";

// Initial state
const initialState = {
    count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
    let number = action.payload ?? 1;

    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + number };

        case "DECREMENT":
            return { ...state, count: state.count - number };

        default:
            return state;
    };
};

const store = createStore(counterReducer);

export default store;