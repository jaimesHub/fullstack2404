import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsersValue = createAsyncThunk('user/fetchValue', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return response.json();
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersValue.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsersValue.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUsersValue.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export { fetchUsersValue };

export default usersSlice.reducer;