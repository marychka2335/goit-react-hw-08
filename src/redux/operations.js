import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const fetchAllContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/contacts');
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const responce = await axios.post('/contacts', contact);
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${id}`);
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const registerUser = createAsyncThunk("auth/registerUser", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/users/signup', credentials);
        Notiflix.Notify.success(`User ${responce.data.user.name} is registered!`);
        console.log(responce)
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Try again!')
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/logIn", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/users/login', credentials);
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        const responce = await axios.post('/users/logout');
        clearAuthHeader();
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refreshUser", async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;
    if (!token) {
        return thunkAPI.rejectWithValue()
    }
    setAuthHeader(token);
    try { 
        const responce = await axios.get('/users/current');
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})