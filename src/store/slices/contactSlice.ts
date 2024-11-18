import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContactById,
  editContact,
  fetchingAllContacts,
  getOneContactById
} from '../thunks/contactThunks';
import { RootState } from '../../app/store';

interface ContactState {
  contacts: IContact[],
  oneContact: IContact | null,
  loading: {
    isFetching: boolean,
    isOneFetching: boolean,
    isAdding: boolean,
    isDeleting: boolean,
    isEditing: boolean,
  }
}

const initialState: ContactState = {
  contacts: [],
  oneContact: null,
  loading: {
    isFetching: false,
    isOneFetching: false,
    isAdding: false,
    isDeleting: false,
    isEditing: false,
  }
}

export const selectAddContactLoading = (state: RootState) => state.contact.loading.isAdding;
export const selectFetchingContactsLoading = (state: RootState) => state.contact.loading.isFetching;
export const selectOneFetchingContactsLoading = (state: RootState) => state.contact.loading.isOneFetching;
export const selectDeleteContactLoading = (state: RootState) => state.contact.loading.isDeleting;
export const selectAllContacts = (state: RootState) => state.contact.contacts;
export const selectOneContact = (state: RootState) => state.contact.oneContact;
export const selectEditContactLoading = (state: RootState) => state.contact.loading.isEditing;

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
      .addCase(getOneContactById.pending, (state) => {
        state.loading.isOneFetching = true;
      })
      .addCase(getOneContactById.fulfilled, (state, action: PayloadAction<IContact | null>) => {
        state.loading.isOneFetching = false;
        state.oneContact = action.payload;
      })
      .addCase(getOneContactById.rejected, (state) => {
        state.loading.isOneFetching = false;
      })
      .addCase(editContact.pending, (state) => {
        state.loading.isEditing = true;
      })
      .addCase(editContact.fulfilled, (state) => {
        state.loading.isEditing = false;
        state.oneContact = null;
      })
      .addCase(editContact.rejected, (state) => {
        state.loading.isEditing = false;
      })
  }
})

export const ContactReducer = contactSlice.reducer;
export const {} = contactSlice.actions;