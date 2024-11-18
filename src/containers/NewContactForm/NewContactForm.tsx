import { useState } from 'react';
import * as React from 'react';

const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  photo: ''
};

const NewContactForm = () => {
  const [contact, setContact] = useState<IContactForm>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;

    setContact(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(contact);
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

      <button className='btn btn-dark'>Save</button>
    </form>
  );
};

export default NewContactForm;