import React, {useContext, useState} from 'react';

import {CityFormProps} from "@features/CityForm";
import {TransportFormProps} from "@features/TransportForm";
import {HotelsFormProps} from "@features/HotelsForm";
import {DateFormProps} from "@features/DateForm";

import {Simple} from "./Simple";
import {Iterable} from "./Iterable";
import {Full} from "./Full";
import {CityEvents} from "./CityEvents";
import {Events} from "./Events";
import {Cases} from "./types";
import {EventsFormProps} from "@features/EventsForm";

interface MultistepProps {
  context: React.Context<any>;
  multiStepCase: Cases
}

export const MultiStepForm = ({context, multiStepCase}: MultistepProps) => {
  const [activePage, setActivePage] = useState(0);

  const {
    setData,
    handleSubmit
  } = useContext(context);

  const handleDateSubmit = (data: DateFormProps) => {
    setData({
      date: data,
    });
  }

  const handleCitySubmit = (data: CityFormProps) => {
    console.log('handleCitySubmit', data);

    setData({
      city: data,
    });
  }

  const handleTransportSubmit = (data: TransportFormProps) => {
    setData({
      transport: data,
    });
  }

  const handleHotelSubmit = (data: HotelsFormProps) => {
    setData({
      hotel: data,
    });
  }

  const handleEventsSubmit = (data: EventsFormProps) => {
    setData({
      events: data,
    });
  }

  switch (multiStepCase) {
    case 'simple':
      return (
        <Simple
          activePage={activePage}
          handleDateSubmit={handleDateSubmit}
          handleCitySubmit={handleCitySubmit}
          handleTransportSubmit={handleTransportSubmit}
        />
      );

    case 'iterable':
      return (
        <Iterable
          activePage={activePage}
          handleCitySubmit={handleCitySubmit}
          handleTransportSubmit={handleTransportSubmit}
          handleHotelSubmit={handleHotelSubmit}
        />
      );

    case 'full':
      return (
        <Full
          activePage={activePage}
          handleCitySubmit={handleCitySubmit}
          handleTransportSubmit={handleTransportSubmit}
          handleHotelSubmit={handleHotelSubmit}
        />
      );

    case 'cityEvents':
      return (
        <CityEvents
          activePage={activePage}
          handleCitySubmit={handleCitySubmit}
          handleEventsSubmit={handleEventsSubmit}
          handleSubmit={handleSubmit}
        />
      );

    case 'events':
      return (
        <Events
          activePage={activePage}
          handleCitySubmit={handleCitySubmit}
          handleTransportSubmit={handleTransportSubmit}
          handleHotelSubmit={handleHotelSubmit}
        />
      );
  }
};
