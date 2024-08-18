import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
// Initial state
const initialState = {
    count: 0,
    loading: false,
    data: [],
    error: '',
};

// Reducer function
const counterReducer = (state = initialState, action) => {
    let number = action.payload ?? 1;

    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + number };

        case "DECREMENT":
            return { ...state, count: state.count - number };

        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    };
};

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;