import { useState } from 'react';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAddContactLoading } from '../../store/slices/contactSlice';
import { addNewContact } from '../../store/thunks/contactThunks';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner';

const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  photo: ''
};

const NewContactForm = () => {
  const [contact, setContact] = useState<IContactForm>(initialState);
  const dispatch = useAppDispatch();
  const addLoading = useAppSelector(selectAddContactLoading);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;

    setContact(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(addNewContact({...contact}));
    setContact(initialState);
    navigate('/');
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new contact</h3>
      <div className='mb-2 w-50'>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name='name'
          id='name'
          value={contact.name}
          onChange={onChange}
          className='mt-1 border-black form-control'
        />
      </div>

      <div className='mb-2 w-50'>
        <label htmlFor="">Phone number: </label>
        <input
          type="text"
          name='phoneNumber'
          id='phoneNumber'
          value={contact.phoneNumber}
          onChange={onChange}
          className='mt-1 border-black form-control'
        />
      </div>

      <div className='mb-2 w-50'>
        <label htmlFor="">Email: </label>
        <input
          type="text"
          name='email'
          id='email'
          value={contact.email}
          onChange={onChange}
          className='mt-1 border-black form-control'
        />
      </div>

      <div className='mb-2 w-50'>
        <label htmlFor="">Photo: </label>
        <input
          type="text"
          name='photo'
          id='photo'
          value={contact.photo}
          onChange={onChange}
          className='mt-1 border-black form-control'
        />
      </div>

      <div>
        <button disabled={addLoading} className='btn btn-dark'>Save</button>
        {addLoading ? <Spinner/> : null}
      </div>

    </form>
  );
};

export default NewContactForm;