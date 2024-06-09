import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { Router } from "./Router";
import { GlobalStyles } from "./Styles";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
};
