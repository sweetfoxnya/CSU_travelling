import React, {createContext} from 'react';

import {MultiStepForm} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";

const Context = createContext({});

export const ExcursionCityEvents = () => {
  const { cityEvents: { setData } } = useStore();

  return (
      <Context.Provider value={setData}>
        <MultiStepForm context={Context} multiStepCase='cityEvents' />
      </Context.Provider>
  );
};
