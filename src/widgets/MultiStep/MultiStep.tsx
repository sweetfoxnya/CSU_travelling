import React, {useContext, useState} from 'react';
import MultiStep from 'react-multistep'

import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportFormProps} from "@features/TransportForm";
import {HotelsForm, HotelsFormProps} from "@features/HotelsForm";

import * as SC from './MultiStep.styles';

interface MultistepProps {
  context: React.Context<any>;
}

export const MultiStepForm = ({ context }: MultistepProps) => {
  const [activePage, setActivePage] = useState(0);

  const setData = useContext(context);

  const handleCitySubmit = (data: CityFormProps) => {
    setData((prev: any) => ({
      ...prev,
      city: data,
    }));

    setActivePage(1);
  }

  const handleTransportSubmit = (data: TransportFormProps) => {
    setData((prev: any) => ({
      ...prev,
      transport: data,
    }));

    setActivePage(2);
  }

  const handleHotelSubmit = (data: HotelsFormProps) => {
    setData((prev: any) => ({
      ...prev,
      hotel: data,
    }));
  }

  return (
    <MultiStep
      activeStep={activePage}
      showNavigation={false}
    >
      <SC.Wrapper title='Город'>
        <CityForm handleFormSubmit={handleCitySubmit}/>
      </SC.Wrapper>
      <SC.Wrapper title='Транспорт'>
        <TransportForm handleFormSubmit={handleTransportSubmit}/>
      </SC.Wrapper>
      <SC.Wrapper title='Отель'>
        <HotelsForm handleFormSubmit={handleHotelSubmit}/>
      </SC.Wrapper>
    </MultiStep>
  );
};
