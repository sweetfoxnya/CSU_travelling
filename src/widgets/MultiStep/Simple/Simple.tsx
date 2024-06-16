import React from 'react';
import MultiStep from "react-multistep";

import {DateForm, DateFormProps} from "@features/DateForm";
import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportFormProps} from "@features/TransportForm";

import * as SC from "./Simple.styles";

interface SimpleProps {
    activePage: number,
    handleDateSubmit: (data: DateFormProps) => void;
    handleCitySubmit: (data: CityFormProps) => void;
    handleTransportSubmit: (data: TransportFormProps) => void;
}

export const Simple = ({activePage, handleDateSubmit, handleCitySubmit, handleTransportSubmit}: SimpleProps) => {
    return (
        <MultiStep
            activeStep={activePage}
            showNavigation={false}
        >
            <SC.Wrapper>
                <DateForm handleFormSubmit={handleDateSubmit}/>
            </SC.Wrapper>
            <SC.Wrapper title='Город'>
                <CityForm handleFormSubmit={handleCitySubmit}/>
            </SC.Wrapper>
            <SC.Wrapper title='Транспорт'>
                <TransportForm handleFormSubmit={handleTransportSubmit}/>
            </SC.Wrapper>
        </MultiStep>
    );
};
