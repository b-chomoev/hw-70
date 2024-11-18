import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectEditContactLoading,
  selectOneContact,
  selectOneFetchingContactsLoading
} from '../../store/slices/contactSlice';
import { useCallback, useEffect } from 'react';
import { editContact, getOneContactById } from '../../store/thunks/contactThunks';
import Spinner from '../../components/UI/Spinner/Spinner';
import { toast } from 'react-toastify';
import ContactForm from '../../components/ContactForm/ContactForm';

const EditContact = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectOneContact);
  const fetchLoading = useAppSelector(selectOneFetchingContactsLoading);
  const editLoading = useAppSelector(selectEditContactLoading);

  const getContactById = useCallback( async () => {
    if (id) {
      dispatch(getOneContactById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    void getContactById();
  }, [getContactById]);

  const edit = async (contact: IContact) => {
    if (id) {
      await dispatch(editContact({contactId: id, contact}));
      navigate('/');
      toast.success("Contact was edited successfully");
    }
  }

  return (
    <div>
      {fetchLoading ? <Spinner /> :
        <>
          {contact ? <ContactForm addNewContact={edit} existingContact={contact} isEdit={true} isLoading={editLoading} /> : navigate('/')}
        </>
      }
    </div>
  );
};

export default EditContact;