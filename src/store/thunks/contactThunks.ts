import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI';

export const addNewContact = createAsyncThunk<void, IContactForm>(
  'contact/addNewContact',
  async (contactToAdd) => {
    await axiosAPI.post('contact.json', {...contactToAdd});
  }
);