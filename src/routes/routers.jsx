import React from 'react';
import Home from '../pages/home';
import Services from '../pages/service';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Contact from '../pages/contact';
import Doctors from '../pages/doctors/doctors';
import DoctorsDetails from '../pages/doctors/doctorsdetails';

import { Routes, Route } from 'react-router-dom';
const Routers = () => {
  const githubRepo = '/bookingapp';
  return (
    <Routes>
      <Route path={githubRepo+'/'} element={<Home />} />
      <Route path={githubRepo+'/home'} element={<Home />} />
      <Route path={githubRepo+'/doctors'} element={<Doctors />} />
      <Route path={githubRepo+'/doctors/:id'} element={<DoctorsDetails />} />
      <Route path={githubRepo+'/login'} element={<Login />} />
      <Route path={githubRepo+'/register'} element={<Signup />} />
      <Route path={githubRepo+'/contact'} element={<Contact />} />
      <Route path={githubRepo+'/services'} element={<Services />} />
    </Routes>
  )
}

export default Routers