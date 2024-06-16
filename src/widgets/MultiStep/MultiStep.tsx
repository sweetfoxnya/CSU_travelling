import React, {useContext, useState} from 'react';
import MultiStep from 'react-multistep'

import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportFormProps} from "@features/TransportForm";
import {HotelsForm, HotelsFormProps} from "@features/HotelsForm";
import {DateForm, DateFormProps} from "@features/DateForm";

import {Cases} from "./types";
import * as SC from './MultiStep.styles';

interface MultistepProps {
    context: React.Context<any>;
    multiStepCase: Cases
}

export const MultiStepForm = ({context, multiStepCase}: MultistepProps) => {
    const [activePage, setActivePage] = useState(0);

    const setData = useContext(context);

    const handleDateSubmit = (data: DateFormProps) => {
        setData((prev: any) => ({
            ...prev,
            date: data,
        }));
    }

    const handleCitySubmit = (data: CityFormProps) => {
        setData((prev: any) => ({
            ...prev,
            city: data,
        }));
    }

    const handleTransportSubmit = (data: TransportFormProps) => {
        setData((prev: any) => ({
            ...prev,
            transport: data,
        }));
    }

    const handleHotelSubmit = (data: HotelsFormProps) => {
        setData((prev: any) => ({
            ...prev,
            hotel: data,
        }));
    }

    switch (multiStepCase) {
        case 'simple':
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

        case 'iterable':
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

        case 'full':
        // return (
        //   <MultiStep
        //     activeStep={activePage}
        //     showNavigation={false}
        //   >
        //     <SC.Wrapper title='Город'>
        //       <CityForm handleFormSubmit={handleCitySubmit}/>
        //     </SC.Wrapper>
        //     <SC.Wrapper title='Транспорт'>
        //       <TransportForm handleFormSubmit={handleTransportSubmit}/>
        //     </SC.Wrapper>
        //     <SC.Wrapper title='Отель'>
        //       <HotelsForm handleFormSubmit={handleHotelSubmit}/>
        //     </SC.Wrapper>
        //   </MultiStep>
        // );

        case 'cityEvents':
        // return (
        //   <MultiStep
        //     activeStep={activePage}
        //     showNavigation={false}
        //   >
        //     <SC.Wrapper title='Город'>
        //       <CityForm handleFormSubmit={handleCitySubmit}/>
        //     </SC.Wrapper>
        //     <SC.Wrapper title='Транспорт'>
        //       <TransportForm handleFormSubmit={handleTransportSubmit}/>
        //     </SC.Wrapper>
        //     <SC.Wrapper title='Отель'>
        //       <HotelsForm handleFormSubmit={handleHotelSubmit}/>
        //     </SC.Wrapper>
        //   </MultiStep>
        // );

        case 'events':
        // return (
        //   <MultiStep
        //     activeStep={activePage}
        //     showNavigation={false}
        //   >
        //     <SC.Wrapper title='Город'>
        //       <CityForm handleFormSubmit={handleCitySubmit}/>
        //     </SC.Wrapper>
        //     <SC.Wrapper title='Транспорт'>
        //       <TransportForm handleFormSubmit={handleTransportSubmit}/>
        //     </SC.Wrapper>
        //     <SC.Wrapper title='Отель'>
        //       <HotelsForm handleFormSubmit={handleHotelSubmit}/>
        //     </SC.Wrapper>
        //   </MultiStep>
        // );
    }
};
