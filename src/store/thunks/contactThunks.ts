import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI';

export const addNewContact = createAsyncThunk<void, IContactForm>(
  'contact/addNewContact',
  async (contactToAdd) => {
    await axiosAPI.post('contact.json', {...contactToAdd});
  }
);

export const fetchingAllContacts = createAsyncThunk<IContact[], void>(
  'contact/fetchingAllContacts',
  async () => {
    const response: {data: IContactAPI | null} = await axiosAPI.get<IContactAPI>('contact.json');

    if (response.data) {
      const contactsInObject = response.data;
      return  Object.keys(contactsInObject).map(id => {
        return {
          ...contactsInObject[id],
          id: id,
        }
      })
    }
    return [];
  }
);