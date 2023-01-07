import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import UserForm from './Pages/user_form';
import DoctorDashboard from './Pages/DoctorDashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact-us' element={<Home />} />
        <Route path='/appointment' element={<UserForm />} />
        <Route path='/login' element={<Home />} />
        <Route path='/register' element={<Home />} />
        <Route path='/dashboard' element={<DoctorDashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;