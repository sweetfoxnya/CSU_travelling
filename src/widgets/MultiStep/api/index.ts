import {CityModel} from "@features/CityForm";
import {TransportModel} from "@features/TransportForm";
import {HotelModel} from "@features/HotelsForm";
import {EventModel} from "@features/EventsForm";

export interface ExcursionSimple {
    city: {
        cityFrom: CityModel,
        cityTo: CityModel,
    },
    transport: TransportModel,
}

export interface ExcursionIterable {
    city: {
        cityFrom: CityModel,
        cityTo: CityModel,
    },
    transport: TransportModel,
    hotel: HotelModel,
}

export interface ExcursionEvents {
    events: EventModel[],
}

export interface ExcursionCityEvents {
    city: {
        cityFrom: CityModel,
        cityTo: CityModel,
    },
    events: EventModel[],
}

export interface ExcursionFull {
    city: {
        cityFrom: CityModel,
        cityTo: CityModel,
    },
    transport: TransportModel,
    hotel: HotelModel,
    events: EventModel[],
}
