import React, {useState} from 'react';
import MultiStep from 'react-multistep'

import {CityForm} from "@features/CityForm";
import {TransportForm} from "@features/TransportForm";
import {HotelsForm} from "@features/HotelsForm";

import * as SC from './MultiStep.styles';

export const MultiStepForm = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <MultiStep
      activeStep={activePage}
    >
      <SC.Wrapper title='Город'>
        <CityForm />
      </SC.Wrapper>
      <SC.Wrapper title='Транспорт'>
        <TransportForm />
      </SC.Wrapper>
      <SC.Wrapper title='Отель'>
        <HotelsForm />
      </SC.Wrapper>
    </MultiStep>
  );
};
