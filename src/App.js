import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Components/Navbar';
import Forgot_Pass from './Pages/Forgot';
import Home from './Pages/Home';
import OTP from './Pages/otp';
import ChangePassword from './Pages/changePassword';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact-us' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/register' element={<Home />} />
        <Route path="/user/forgotPassword" element={<Forgot_Pass/>}/>
        <Route path="/user/verifyOtp" element={<OTP/>}/>
        <Route path='/user/changePassword' element={<ChangePassword/>}></Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;