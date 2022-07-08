import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        name: 'Hoang',
        age:"23",
        about:"I'm Web Developer",
        avaUrl:`https://i.redd.it/7ipyf6pvqac61.png`,
        themeColor: "#ff9051",
        pending: false,
        error: false
    },
    reducers:{
        beginUpdate:(state) => {
            state.pending = true;
        },
        errorUpdate:(state) => {
            state.pending = false;
            state.error = true;
        },
        successUpdate:(state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
    }
})

export const {beginUpdate, errorUpdate, successUpdate} = userSlice.actions;
export default userSlice.reducer;
