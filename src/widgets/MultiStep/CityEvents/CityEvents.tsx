import React, {useMemo} from 'react';
import MultiStep from "react-multistep";
import {observer} from "mobx-react";

import {ExcursionCityEvents} from "@widgets/MultiStep";
import {CityForm, CityFormProps} from "@features/CityForm";
import {EventsForm, EventsFormProps} from "@features/EventsForm";
import {useStore} from "@shared/hooks";

import * as SC from "./CityEvents.styles";

interface CityEventsProps {
  activePage: number,
  handleCitySubmit: (data: CityFormProps) => void;
  handleEventsSubmit: (data: EventsFormProps) => void;
  handleSubmit: (data: ExcursionCityEvents) => void;
}

export const CityEvents = observer(({
  activePage,
  handleCitySubmit,
  handleEventsSubmit,
  handleSubmit
}: CityEventsProps) => {
  const { cityEvents: {
    data,
  } } = useStore();

  console.log('store data', {...data})

  const isFinish = useMemo(() => {
    return Boolean(data && data.events && data.city)
  }, [data]);

  return (
    <>
      <MultiStep
        activeStep={activePage}
        showNavigation={false}
      >
        <SC.Wrapper title='Город'>
          <CityForm handleFormSubmit={handleCitySubmit}/>
        </SC.Wrapper>
        <SC.Wrapper title='События'>
          <EventsForm handleFormSubmit={handleEventsSubmit} />
        </SC.Wrapper>
      </MultiStep>
      <button
        disabled={!isFinish}
        onClick={() => {
          if (isFinish) {
            // @ts-ignore
            handleSubmit(data)
          }
        }}
      >
        Отправить на бронь!
      </button>
    </>
)
  ;
})
