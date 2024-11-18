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

export const deleteContactById = createAsyncThunk<void, string>(
  'contact/deleteContact',
  async (id: string) => {
    await axiosAPI.delete(`contact/${id}.json`);
  }
);

export const getOneContactById = createAsyncThunk(
  'contact/getOneContactById',
  async (id) => {
    const response = await axiosAPI.get<IContact>(`contact/${id}.json`);
  }
)