import React, {createContext, useState} from 'react';
import {MultiStepForm} from "@widgets/MultiStep";

const Context = createContext({});

export const ExcursionSimple = () => {
  const [data, setData] = useState<null>(null);

  return (
    <Context.Provider value={setData}>
      <MultiStepForm context={Context} multiStepCase='simple' />
    </Context.Provider>
  );
};
