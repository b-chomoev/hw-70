import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAddContactLoading } from '../../store/slices/contactSlice';
import { addNewContact } from '../../store/thunks/contactThunks';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import { toast } from 'react-toastify';

const NewContactForm = () => {
  const dispatch = useAppDispatch();
  const addLoading = useAppSelector(selectAddContactLoading);
  const navigate = useNavigate();

  const addContact = async (contact: IContact) => {
    await dispatch(addNewContact({...contact}));
    navigate('/');
    toast.success("Dish was added successfully");
  }

  return (
    <div>
      <ContactForm addNewContact={addContact} isLoading={addLoading} />
    </div>
  );
};

export default NewContactForm;