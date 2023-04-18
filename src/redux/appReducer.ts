import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currPage: '',
  page: 1,
  inputValue: '',
  query: '',
  isLoading: false,
  isError: false,
  errMsg: '',
  modalCard: 0,
  results: [],
  info: {},
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setCurrPage: (state, action) => {
      state.currPage = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    setQuery: (state, action) => {
      state.query = action.payload.payload;
    },
    setModalCard: (state, action) => {
      state.modalCard = action.payload;
    },
    searchInput: (state, action) => {
      state.inputValue = action.payload.payload;
      state.page = 1;
    },
    setResults: (state, action) => {
      if (action.payload.data) {
        state.results = action.payload.data.results;
        state.info = action.payload.data.info;
      }
      state.isError = action.payload.isError;
      state.isLoading = action.payload.isFetching;
    },
  },
});

export const {
  setPage,
  setQuery,
  setModalCard,
  searchInput,
  nextPage,
  prevPage,
  setCurrPage,
  setResults,
} = appReducer.actions;
