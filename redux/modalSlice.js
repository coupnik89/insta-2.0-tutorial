import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        getState: (state, action) => state,
        changeState: (state, action) => {
            return !state
        }
    }
})

export const { getState, changeState } = modalSlice.actions

export default modalSlice.reducer