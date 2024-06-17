import React from 'react';
import MultiStep from "react-multistep";

import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportModel} from "@features/TransportForm";
import {HotelModel, HotelsForm} from "@features/HotelsForm";

import * as SC from "./Full.styles";

interface FullProps {
    activePage: number,
    handleCitySubmit: (data: CityFormProps) => void;
    handleTransportSubmit: (data: TransportModel) => void;
    handleHotelSubmit: (data: HotelModel) => void;
}

export const Full = ({activePage, handleCitySubmit, handleTransportSubmit, handleHotelSubmit}: FullProps) => {
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
