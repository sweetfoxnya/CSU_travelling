import React, {createContext} from 'react';

import {MultiStepForm} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";

import {useCityEvents} from "../api";

const Context = createContext({});

export const ExcursionCityEvents = () => {
  const { cityEvents: {
    setData
  } } = useStore();

  const { data: eventsResponse, mutate: sendEvents } = useCityEvents();

  const handleSubmit = (data: any) => {
    sendEvents(data);
  }

  return (
      <Context.Provider value={{
        setData,
        handleSubmit
      }}>
        <MultiStepForm context={Context} multiStepCase='cityEvents' />
      </Context.Provider>
  );
};
