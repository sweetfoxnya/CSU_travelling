import {CityModel} from "@features/CityForm";
import {TransportModel} from "@features/TransportForm/model";
import {HotelModel} from "@features/HotelsForm";

export interface ExcursionModel {
  city: CityModel,
  transport: TransportModel,
  hotel: HotelModel
}
