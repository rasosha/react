import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchInput: (state, action) => {
      return { ...state, inputValue: action.payload.payload };
    },
  },
});

export const { searchInput } = searchSlice.actions;

export default searchSlice.reducer;
