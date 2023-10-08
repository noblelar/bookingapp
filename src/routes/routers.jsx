import React from 'react';
import Home from '../pages/home';
import Services from '../pages/service';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Contact from '../pages/contact';
import Doctors from '../pages/doctors/doctors';
import DoctorsDetails from '../pages/doctors/doctorsdetails';

import { Router, Routes, Route } from 'react-router-dom';
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorsDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  )
}

export default Routers