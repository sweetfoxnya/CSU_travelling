import {CityModel} from "@features/CityForm";
import {TransportModel} from "@features/TransportForm";
import {HotelModel} from "@features/HotelsForm";
import {EventModel} from "@features/EventsForm";
import {DateModel} from "@features/DateForm";

export interface ExcursionSimple {
  date: DateModel,
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

export interface ExcursionFull {
  date: DateModel,
  city: {
    cityFrom: CityModel,
    cityTo: CityModel,
  },
  transport: TransportModel,
  hotel: HotelModel,
  events: EventModel[],
}

export interface ExcursionEvents {
  date: DateModel,
  events: EventModel[],
}

export interface ExcursionCityEvents {
  date: DateModel,
  city: {
    cityFrom: CityModel,
    cityTo: CityModel,
  },
  events: EventModel[],
}
