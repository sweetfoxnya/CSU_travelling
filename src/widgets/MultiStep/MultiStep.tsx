import React, {useState} from 'react';
import MultiStep from 'react-multistep'

import {CityForm} from "@features/CityForm";

export const MultiStepForm = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <MultiStep
      activeStep={activePage}
    >
      <CityForm />
      <form>
      </form>
    </MultiStep>
  );
};
