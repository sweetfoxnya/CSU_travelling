import React from 'react';
import MultiStep from "react-multistep";

import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportFormProps} from "@features/TransportForm";
import {HotelsForm, HotelsFormProps} from "@features/HotelsForm";

import * as SC from "./CityEvents.styles";

interface CityEventsProps {
  activePage: number,
  handleCitySubmit: (data: CityFormProps) => void;
  handleTransportSubmit: (data: TransportFormProps) => void;
  handleHotelSubmit: (data: HotelsFormProps) => void;
}

export const CityEvents = ({
  activePage,
  handleCitySubmit,
  handleTransportSubmit,
  handleHotelSubmit,
}: CityEventsProps) => {

  return (
    <MultiStep
      activeStep={activePage}
      showNavigation={false}
    >
      <SC.Wrapper>
        <CityForm handleFormSubmit={handleCitySubmit}/>
      </SC.Wrapper>
      <SC.Wrapper title='Город'>
        <TransportForm
          handleFormSubmit={handleTransportSubmit}
        />
      </SC.Wrapper>
      <SC.Wrapper title='Транспорт'>
        <HotelsForm handleFormSubmit={handleHotelSubmit}/>
      </SC.Wrapper>
    </MultiStep>
  );
};
