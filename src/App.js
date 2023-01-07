import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ChangePassword from './Pages/ChangePassword';
import OTP from './Pages/Otp';
import Forgot_Pass from './Pages/Forgot';
import Auth from './Pages/Auth';
import "bootstrap/dist/css/bootstrap.min.css"
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Home />} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Home />} />
        <Route path='' element={<Forgot_Pass/>}></Route>
        <Route path='/user/verifyOtp' element={<OTP/>} ></Route>
        <Route path='/user/changePassword' element={<ChangePassword/>}></Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;