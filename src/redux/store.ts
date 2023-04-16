import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './formReducer';

export type State = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
