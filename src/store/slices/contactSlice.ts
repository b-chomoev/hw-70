import { createSlice } from '@reduxjs/toolkit';

interface ContactState {
  contacts: IContact[],
  loading: {
    isFetching: boolean,
    isAdding: boolean,
  }
}

const initialState: ContactState = {
  contacts: [],
  loading: {
    isFetching: false,
    isAdding: false,
  }
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers:{}
})

export const ContactReducer = contactSlice.reducer;
export const {} = contactSlice.actions;