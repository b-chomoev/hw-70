import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewContact, deleteContactById, fetchingAllContacts } from '../thunks/contactThunks';
import { RootState } from '../../app/store';

interface ContactState {
  contacts: IContact[],
  loading: {
    isFetching: boolean,
    isAdding: boolean,
    isDeleting: boolean,
  }
}

const initialState: ContactState = {
  contacts: [],
  loading: {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
  }
}

export const selectAddContactLoading = (state: RootState) => state.contact.loading.isAdding;
export const selectFetchingContactsLoading = (state: RootState) => state.contact.loading.isFetching;
export const selectDeleteContactLoading = (state: RootState) => state.contact.loading.isDeleting;
export const selectAllContacts = (state: RootState) => state.contact.contacts;

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
      .addCase(fetchingAllContacts.pending, (state) => {
        state.loading.isFetching = true;
      })
      .addCase(fetchingAllContacts.fulfilled, (state, action: PayloadAction<IContact[]>) => {
        state.loading.isFetching = false;
        state.contacts = action.payload;
      })
      .addCase(fetchingAllContacts.rejected, (state) => {
        state.loading.isFetching = false;
      })
      .addCase(deleteContactById.pending, (state) => {
        state.loading.isDeleting = true;
      })
      .addCase(deleteContactById.fulfilled, (state) => {
        state.loading.isDeleting = false;
      })
      .addCase(deleteContactById.rejected, (state) => {
        state.loading.isDeleting = false;
      })
  }
})

export const ContactReducer = contactSlice.reducer;
export const {} = contactSlice.actions;