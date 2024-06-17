import React, {useContext, useState} from 'react';

import {CityFormProps} from "@features/CityForm";
import {TransportModel} from "@features/TransportForm";
import {HotelModel} from "@features/HotelsForm";
import {DateFormProps} from "@features/DateForm";
import {EventsFormProps} from "@features/EventsForm";

import {Simple} from "./Simple";
import {Iterable} from "./Iterable";
import {Full} from "./Full";
import {CityEvents} from "./CityEvents";
import {Events} from "./Events";
import {Cases} from "./types";

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
    setData({
      city: data,
    });
  }

  const handleTransportSubmit = (data: TransportModel) => {
    setData({
      transport: data,
    });
  }

  const handleHotelSubmit = (data: HotelModel) => {
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
          handleSubmit={handleSubmit}
        />
      );

    case 'iterable':
      return (
        <Iterable
          activePage={activePage}
          handleCitySubmit={handleCitySubmit}
          handleTransportSubmit={handleTransportSubmit}
          handleHotelSubmit={handleHotelSubmit}
          handleSubmit={handleSubmit}
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
          handleDateSubmit={handleDateSubmit}
          handleEventsSubmit={handleEventsSubmit}
          handleSubmit={handleSubmit}
        />
      );
  }
};
