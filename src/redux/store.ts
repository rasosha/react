import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './formReducer';
import { ramApi } from './apiReducer';
import { appReducer } from './appReducer';
export type State = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    [ramApi.reducerPath]: ramApi.reducer,
    myApp: appReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ramApi.middleware),
});
