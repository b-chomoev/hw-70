import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import NewContactForm from './containers/NewContactForm/NewContactForm';
import Layout from './components/Layout/Layout';
import EditContact from './containers/EditContact/EditContact';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-contact' element={<NewContactForm />} />
          <Route path='/edit-contact/:id' element={<EditContact />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </>
  )
};

export default App
