import React, {useContext, useState} from 'react';

import {CityFormProps} from "@features/CityForm";
import {TransportFormProps} from "@features/TransportForm";
import {HotelsFormProps} from "@features/HotelsForm";
import {DateFormProps} from "@features/DateForm";
import {Simple} from "@widgets/MultiStep/Simple";
import {Iterable} from "@widgets/MultiStep/Iterable";
import {Full} from "@widgets/MultiStep/Full";
import {CityEvents} from "@widgets/MultiStep/CityEvents";
import {Events} from "@widgets/MultiStep/Events";

import {Cases} from "./types";

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
                <Simple
                    activePage={activePage}
                    handleDateSubmit={handleDateSubmit}
                    handleCitySubmit={handleCitySubmit}
                    handleTransportSubmit={handleTransportSubmit}
                />
            );

        case 'iterable':
            return (
                <Iterable
                    activePage={activePage}
                    handleCitySubmit={handleCitySubmit}
                    handleTransportSubmit={handleTransportSubmit}
                    handleHotelSubmit={handleHotelSubmit}
                />
            );

        case 'full':
            return (
                <Full
                    activePage={activePage}
                    handleCitySubmit={handleCitySubmit}
                    handleTransportSubmit={handleTransportSubmit}
                    handleHotelSubmit={handleHotelSubmit}
                />
            );

        case 'cityEvents':
            return (
                <CityEvents
                    activePage={activePage}
                    handleCitySubmit={handleCitySubmit}
                    handleTransportSubmit={handleTransportSubmit}
                    handleHotelSubmit={handleHotelSubmit}
                />
            );

        case 'events':
            return (
                <Events
                    activePage={activePage}
                    handleCitySubmit={handleCitySubmit}
                    handleTransportSubmit={handleTransportSubmit}
                    handleHotelSubmit={handleHotelSubmit}
                />
            );
    }
};
