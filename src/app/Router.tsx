import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Home, Login, Register} from "@pages";
import {MainLayout} from "@shared";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route index element={<Home />} />
      <Route path='auth' element={<MainLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
