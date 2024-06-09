import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Home} from "@pages";

export const Router = () => (
  <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
  </BrowserRouter>
);
