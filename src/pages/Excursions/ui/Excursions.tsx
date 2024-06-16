import React, {createContext, useMemo, useState} from 'react';

import {MultiStepForm} from "@widgets/MultiStep";
import {ExcursionModel} from "@pages/Excursions/model";
import {Container} from "@shared";

import * as SC from './Excursions.styles';

const Context = createContext({});

export const Excursions = () => {
  const [data, setData] = useState<ExcursionModel | null>(null);
  const [dataArray, setDataArray] = useState<ExcursionModel[]>([]);

  const isFinish = useMemo(() => Boolean(
    data && data.city && data.transport && data.hotel
  ), [data]);

  const handleIterationSubmit = () => {
    setDataArray((prev) => [
      ...prev,
      data
    ]);

    setData(null);
  }


  return (
    <Context.Provider value={setData}>
      <Container>
        <SC.Wrapper>
          <MultiStepForm context={Context}/>
          {isFinish && (
            <button
              onClick={handleIterationSubmit}
            >
              Сохранить данные
            </button>
          )}
        </SC.Wrapper>
      </Container>
    </Context.Provider>
  );
};
