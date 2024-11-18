import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAllContacts, selectFetchingContactsLoading } from '../../store/slices/contactSlice';
import Spinner from '../../components/UI/Spinner';
import { useCallback, useEffect } from 'react';
import { fetchingAllContacts } from '../../store/thunks/contactThunks';

const Home = () => {
  const dispatch = useAppDispatch();
  const allContacts = useAppSelector(selectAllContacts);
  const fetchLoading = useAppSelector(selectFetchingContactsLoading);

  const getOneContact = () => {
    console.log('getOneContact');
  }

  const fetchContacts = useCallback(async () => {
    await dispatch(fetchingAllContacts());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchContacts();
    }
  }, [fetchContacts]);

  return (
    <>
      {fetchLoading ? <Spinner /> :
        <>
          {allContacts.length === 0 ? <p>No Contacts yet</p> :
            <>
              {allContacts.map(contact => (
                <div onClick={getOneContact} key={contact.id} className='border-1 border-black shadow-lg rounded-3 p-3 mb-3 w-50 mx-auto d-flex align-items-center'>
                  <div><img src={contact.photo} alt="Contacts Photo" style={{width: 100}}/></div>
                  <h1 className='ps-5'>{contact.name}</h1>
                </div>
              ))}
            </>
          }
        </>
      }
    </>
  );
};

export default Home;