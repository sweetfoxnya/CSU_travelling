import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { Router } from "./Router";
import { GlobalStyles } from "./Styles";
import {observer} from "mobx-react";

const queryClient = new QueryClient();

export const App = observer(() => {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
})
