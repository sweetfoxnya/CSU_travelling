import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Header} from "@widgets/Header";
import {Excursions, Home, Login, Profile, Register} from "@pages";
import {MainLayout} from "@shared";

export const Router = () => (
  <BrowserRouter basename="/">
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path='auth' element={<MainLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='profile' element={<Profile />} />
      <Route path='excursions' element={<Excursions />} />
    </Routes>
  </BrowserRouter>
);
