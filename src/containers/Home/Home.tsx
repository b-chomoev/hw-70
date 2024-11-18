import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectAllContacts,
  selectDeleteContactLoading,
  selectFetchingContactsLoading
} from '../../store/slices/contactSlice';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useCallback, useEffect } from 'react';
import { deleteContactById, fetchingAllContacts } from '../../store/thunks/contactThunks';

const Home = () => {
  const dispatch = useAppDispatch();
  const allContacts = useAppSelector(selectAllContacts);
  const fetchLoading = useAppSelector(selectFetchingContactsLoading);
  const deleteLoading = useAppSelector(selectDeleteContactLoading);

  const fetchContacts = useCallback(async () => {
    await dispatch(fetchingAllContacts());
  }, [dispatch]);

  const deleteContact = async (id: string | undefined) => {
    if (id) {
      await dispatch(deleteContactById(id));
    }
    await fetchContacts();
  };

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchContacts();
    }
  }, [fetchContacts]);

  return (
    <div>

      {fetchLoading || deleteLoading ? <Spinner/> :
        <>
          {allContacts.length === 0 ? <p>No Contacts yet</p> :
            <>
              {allContacts.map(contact => (
                <div key={contact.id} className="border border-black rounded-3 p-1 mb-3 w-50 mx-auto d-flex align-items-center">
                  <div><img src={contact.photo} alt="Contacts Photo" style={{width: 75}}/></div>
                  <div className="d-flex mx-auto row align-items-center text-center">
                    <div>
                      <h4 className="ps-3">{contact.name}</h4>
                    </div>
                    <div>
                      <p>Phone Number: {contact.phoneNumber}</p>
                      <p>Email: {contact.email}</p>
                    </div>
                    <div>
                      <button type='button' className="btn btn-danger w-25 mx-3" onClick={() => deleteContact(contact.id)}>Delete</button>
                      <button className="btn btn-dark w-25">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          }
        </>
      }
    </div>
  );
};

export default Home;