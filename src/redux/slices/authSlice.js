import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { logIn, logOut, refreshUser, registerUser } from "./../operations";
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        }).addCase(logIn.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        }).addCase(logOut.fulfilled, (state) => {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        }).addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        }).addCase(refreshUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        }).addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })
    }
})

const persistConfig = {
  key: 'auth',
    storage,
  whitelist: ['token']
};

export const authReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);