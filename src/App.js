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
import UserForm from './Pages/user_form';
import DoctorDashboard from './Pages/DoctorDashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Home />} />
        <Route path='/appointment' element={<UserForm />} />
        <Route path='/user/login' element={<Auth type="user"/>} />
        <Route path='/doctor/login' element={<Auth type="doctor"/>} />
        <Route path='/register' element={<Home />} />
        <Route path='/user/forgotPassword' element={<Forgot_Pass/>}></Route>
        <Route path='/user/verifyOtp' element={<OTP/>} ></Route>
        <Route path='/user/changePassword' element={<ChangePassword/>}></Route>
        <Route path='/doctor/forgotPassword' element={<Forgot_Pass type="doctor"/>}></Route>
        <Route path='/doctor/verifyOtp' element={<OTP type="doctor"/>} ></Route>
        <Route path='/doctor/changePassword' element={<ChangePassword type="doctor"/>}></Route>
        <Route path='/dashboard' element={<DoctorDashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;