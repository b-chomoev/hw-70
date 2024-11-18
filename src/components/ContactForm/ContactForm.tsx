import { useState } from 'react';
import * as React from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';

interface ContactFormProps {
  addNewContact: (newContact: IContactForm) => void;
  existingContact?: IContactForm;
  isEdit?: boolean;
  isLoading?: boolean;
}

const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  photo: ''
};

const ContactForm: React.FC<ContactFormProps> = ({ addNewContact, existingContact = initialState, isEdit = false, isLoading = false }) => {
  const [contact, setContact] = useState<IContactForm>(existingContact);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (contact.name.trim().length === 0 && contact.phoneNumber.trim().length === 0 && contact.email.trim().length === 0) {
      alert('Fill in the blank');
    } else {
      addNewContact({ ...contact });
    }

    if (!isEdit) {
      setContact(initialState);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>{isEdit ? 'Edit Contact' : 'Add new contact'}</h3>
      <div className="mb-2 w-50">
        <label htmlFor="name"> Full Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={contact.name}
          onChange={onChange}
          className="mt-1 border-black form-control"
        />
      </div>

      <div className="mb-2 w-50">
        <label htmlFor="phoneNumber">Phone number: </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={contact.phoneNumber}
          onChange={onChange}
          className="mt-1 border-black form-control"
        />
      </div>

      <div className="mb-2 w-50">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={contact.email}
          onChange={onChange}
          className="mt-1 border-black form-control"
        />
      </div>

      <div className="mb-2 w-50">
        <label htmlFor="photo">Photo: </label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={contact.photo}
          onChange={onChange}
          className="mt-1 border-black form-control"
        />
      </div>

      <div className="mb-2 w-50">
        <label>Photo preview: </label>
        {contact.photo ? (
          <div className="mt-2">
            <img src={contact.photo} alt="Contact Photo" className="w-25" />
          </div>
        ) : (
          <div className="fw-bold"> Here is going to be photo preview</div>
        )}
      </div>

      <div>
        <button disabled={isLoading} className="btn btn-dark">Save</button>
        {isLoading && <Spinner />}
      </div>
    </form>
  );
};

export default ContactForm;
