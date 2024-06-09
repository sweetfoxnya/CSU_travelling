import React from 'react';

import { Router } from "./Router";
import { GlobalStyles } from "./Styles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
