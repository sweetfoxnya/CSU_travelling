import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Auth, Home} from "@pages";

export const Router = () => (
  <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
  </BrowserRouter>
);
