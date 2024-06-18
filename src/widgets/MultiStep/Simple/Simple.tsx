import React, {useMemo} from 'react';
import MultiStep from "react-multistep";
import {observer} from "mobx-react";

import {DateForm, DateFormProps} from "@features/DateForm";
import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportModel} from "@features/TransportForm";
import {ExcursionSimple} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";
import {Button} from "@shared";

import * as SC from "./Simple.styles";

interface SimpleProps {
  activePage: number,
  handleDateSubmit: (data: DateFormProps) => void;
  handleCitySubmit: (data: CityFormProps) => void;
  handleTransportSubmit: (data: TransportModel) => void;
  handleSubmit: (data: ExcursionSimple) => void;
}

export const Simple = observer(({
 activePage,
 handleDateSubmit,
 handleCitySubmit,
 handleTransportSubmit,
 handleSubmit,
}: SimpleProps) => {
    const { simple: {
      data,
    }} = useStore();

    console.log('store data', {...data})

    const isFinish = useMemo(() => {
        return Boolean(data && data.date && data.transport && data.city)
    }, [data]);

    return (
        <SC.Container>
            <MultiStep
                activeStep={activePage}
                showNavigation={false}
            >
                <SC.Wrapper title='Дата'>
                    <DateForm handleFormSubmit={handleDateSubmit}/>
                </SC.Wrapper>
                <SC.Wrapper title='Город'>
                    <CityForm handleFormSubmit={handleCitySubmit}/>
                </SC.Wrapper>
                <SC.Wrapper title='Транспорт'>
                    <TransportForm handleFormSubmit={handleTransportSubmit}/>
                </SC.Wrapper>
            </MultiStep>
            <Button
                disabled={!isFinish}
                onClick={() => {
                    if (isFinish) {
                        // @ts-ignore
                        handleSubmit(data)
                    }
                }}
            >
                Отправить на бронь!
            </Button>
        </SC.Container>
    );
});
