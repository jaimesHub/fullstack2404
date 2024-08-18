// const fetchDataRequest = () => {
//     return {
//         type: 'FETCH_DATA_REQUEST',
//     };
// };

// const fetchDataSuccess = (data) => {
//     return {
//         type: 'FETCH_DATA_SUCCESS',
//         payload: data,
//     };
// };

// const fetchDataFailure = (error) => {
//     return {
//         type: 'FETCH_DATA_FAILURE',
//         payload: error,
//     };
// };

// const fetchData = () => {
//     return (dispatch) => {
//         dispatch(fetchDataRequest());
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((data) => dispatch(fetchDataSuccess(data)))
//             .catch((error) => dispatch(fetchDataFailure(error)));
//     };
// };

// export { fetchData };

const fetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST',
    };
};

const fetchDataSuccess = (data) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
    };
};

const fetchDataFailure = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error,
    };
};

const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch((error) => dispatch(fetchDataFailure(error)));
    };
};

export { fetchData };