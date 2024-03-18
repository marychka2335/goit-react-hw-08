import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(_, {payload}) {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;