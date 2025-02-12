import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Header} from "@widgets/Header";
import {
  CityEvents,
  Events,
  Full,
  Iterable,
  Login,
  Profile,
  Register,
  Simple,
  Excursions
} from "@pages";
import {MainLayout} from "@shared";
import {Home} from "@pages/Home/Home";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route index element={<Home />} />
      <Route path='auth' element={<MainLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='profile' element={<Profile />} />
      <Route path='excursions' element={<Excursions />} />
      <Route path='excursions/simple' element={<Simple />} />
      <Route path='excursions/iterable' element={<Iterable />} />
      <Route path='excursions/events' element={<Events />} />
      <Route path='excursions/cityEvents' element={<CityEvents />} />
      <Route path='excursions/full' element={<Full />} />
      <Route path='*' element={<h1>NOT FOUND(</h1>} />
    </Routes>
  </BrowserRouter>
);
