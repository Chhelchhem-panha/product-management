import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserForm from './pages/CreateUser';
import Navbar from './components/Navbar';
import ProductForm from './pages/CreateProduct';
import NotFound from './pages/404';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductTable from './pages/ProductTable';
import MyEditor from './pages/MyEditor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<ProductForm/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/useraccount' element={<UserForm />} />
        <Route path='/datatable' element={<ProductTable />} />
        <Route path='/editor' element={<MyEditor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
