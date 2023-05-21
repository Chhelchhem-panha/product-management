import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductForm from './pages/CreateProduct';
import NotFound from './actions/pages/404';
import Home from './actions/pages/Home';
import Footer from './actions/components/Footer';
import UserForm from './pages/CreateUser';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<ProductForm/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/create_user' element={<UserForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
