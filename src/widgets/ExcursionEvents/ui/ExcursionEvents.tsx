import React, {createContext} from 'react';

import {MultiStepForm} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";
import {useEvents} from "@widgets/ExcursionEvents";

const Context = createContext({});

export const ExcursionEvents = () => {
  const {events: {setData}} = useStore();

    const { data: eventsResponse, mutate: sendEvents} = useEvents();

    const handleSubmit = (data: any) => {
        sendEvents(data);
    }

  return (
    <Context.Provider value={{setData, handleSubmit}}>
      <MultiStepForm context={Context} multiStepCase='events'/>
    </Context.Provider>
  );
};
