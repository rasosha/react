import { createSlice } from '@reduxjs/toolkit';
import { ICardsArr } from '../types/types';

const initialState: ICardsArr = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.cards.push(action.payload.payload);
    },
  },
});

export const { setForm } = formSlice.actions;

export default formSlice.reducer;
