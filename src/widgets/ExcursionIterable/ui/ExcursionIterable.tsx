import React, {createContext} from 'react';
import {observer} from "mobx-react";

import {
  ExcursionIterable as IExcursionIterable,
  MultiStepForm
} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";

import {useIterable} from "../api";

const Context = createContext({});

export const ExcursionIterable = observer(() => {
  const { iterable: {
    setData
  }} = useStore();
  const { mutate } = useIterable();

  const handleSubmit = (data: IExcursionIterable) => {
    mutate(data);
  }

  return (
    <Context.Provider value={{
      setData,
      handleSubmit
    }}>
      <MultiStepForm context={Context} multiStepCase='iterable'/>
    </Context.Provider>
  );
})
