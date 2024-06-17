import React, {createContext} from 'react';

import {MultiStepForm} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";
import {useSimple} from "@widgets/ExcursionSimple/api";

const Context = createContext({});

export const ExcursionSimple = () => {
  const { simple: { setData } } = useStore();

  const { data: simpleResponse, mutate: sendSimple} = useSimple();

  const handleSubmit = (data: any) => {
      sendSimple(data);
  }

  return (
    <Context.Provider value={{setData, handleSubmit}}>
      <MultiStepForm context={Context} multiStepCase='simple' />
    </Context.Provider>
  );
};
