import React, {useMemo} from 'react';
import MultiStep from "react-multistep";
import {observer} from "mobx-react";

import {CityForm, CityFormProps} from "@features/CityForm";
import {TransportForm, TransportModel} from "@features/TransportForm";
import {HotelModel, HotelsForm} from "@features/HotelsForm";
import {DateForm, DateFormProps} from "@features/DateForm";
import {EventsForm, EventsFormProps} from "@features/EventsForm";
import {ExcursionFull} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";
import {Button} from "@shared";

import * as SC from "./Full.styles";

interface FullProps {
    activePage: number,
    handleDateSubmit: (data: DateFormProps) => void;
    handleCitySubmit: (data: CityFormProps) => void;
    handleTransportSubmit: (data: TransportModel) => void;
    handleEventsSubmit: (data: EventsFormProps) => void;
    handleHotelSubmit: (data: HotelModel) => void;
    handleSubmit: (data: ExcursionFull) => void;
}

export const Full = observer(({
 activePage,
 handleDateSubmit,
 handleCitySubmit,
 handleTransportSubmit,
 handleHotelSubmit,
 handleEventsSubmit,
 handleSubmit,
}: FullProps) => {
    const { full: {
        data,
    }} = useStore();

    console.log('store data', {...data})

    const isFinish = useMemo(() => {
        return Boolean(data && data.date && data.transport && data.city && data.hotel && data.events)
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
                <SC.Wrapper title='Отель'>
                    <HotelsForm handleFormSubmit={handleHotelSubmit}/>
                </SC.Wrapper>
                <SC.Wrapper title='События'>
                    <EventsForm handleFormSubmit={handleEventsSubmit}/>
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
)});
