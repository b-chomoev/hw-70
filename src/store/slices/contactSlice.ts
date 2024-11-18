import { createSlice } from '@reduxjs/toolkit';
import { addNewContact } from '../thunks/contactThunks';
import { RootState } from '../../app/store';

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

export const selectAddContactLoading = (state: RootState) => state.contact.loading.isAdding;

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(addNewContact.pending, (state) => {
        state.loading.isAdding = true;
      })
      .addCase(addNewContact.fulfilled, (state) => {
        state.loading.isAdding = false;
      })
      .addCase(addNewContact.rejected, (state) => {
        state.loading.isAdding = false;
      })
  }
})

export const ContactReducer = contactSlice.reducer;
export const {} = contactSlice.actions;