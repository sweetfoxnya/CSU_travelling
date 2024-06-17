import React from 'react';
import MultiStep from "react-multistep";

import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportModel} from "@features/TransportForm";
import {HotelModel, HotelsForm} from "@features/HotelsForm";

import * as SC from "./Events.styles";

interface EventsProps {
    activePage: number,
    handleCitySubmit: (data: CityFormProps) => void;
    handleTransportSubmit: (data: TransportModel) => void;
    handleHotelSubmit: (data: HotelModel) => void;
}

export const Events = ({activePage, handleCitySubmit, handleTransportSubmit, handleHotelSubmit}: EventsProps) => {
    return (
        <MultiStep
            activeStep={activePage}
            showNavigation={false}
        >
            <SC.Wrapper>
                <CityForm handleFormSubmit={handleCitySubmit}/>
            </SC.Wrapper>
            <SC.Wrapper title='Город'>
                <TransportForm handleFormSubmit={handleTransportSubmit}/>
            </SC.Wrapper>
            <SC.Wrapper title='Транспорт'>
                <HotelsForm handleFormSubmit={handleHotelSubmit}/>
            </SC.Wrapper>
        </MultiStep>
    );
};
