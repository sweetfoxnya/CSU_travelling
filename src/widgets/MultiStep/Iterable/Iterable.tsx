import React, {useMemo} from 'react';
import MultiStep from "react-multistep";
import {observer} from "mobx-react";

import {ExcursionIterable} from "@widgets/MultiStep";
import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportModel} from "@features/TransportForm";
import {HotelModel, HotelsForm} from "@features/HotelsForm";
import {useStore} from "@shared/hooks";

import * as SC from "./Iterable.styles";

interface IterableProps {
  activePage: number,
  handleCitySubmit: (data: CityFormProps) => void;
  handleTransportSubmit: (data: TransportModel) => void;
  handleHotelSubmit: (data: HotelModel) => void;
  handleSubmit: (data: ExcursionIterable) => void;
}

export const Iterable = observer(({
  activePage,
  handleCitySubmit,
  handleTransportSubmit,
  handleHotelSubmit,
  handleSubmit
}: IterableProps) => {
  const { iterable: {
    data,
  } } = useStore();

  const isFinish = useMemo(() => {
    return Boolean(data && data.city && data.transport && data.hotel)
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
        <SC.Wrapper title='Транспорт'>
          <TransportForm handleFormSubmit={handleTransportSubmit}/>
        </SC.Wrapper>
        <SC.Wrapper title='Отель'>
          <HotelsForm handleFormSubmit={handleHotelSubmit}/>
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
  );
})
