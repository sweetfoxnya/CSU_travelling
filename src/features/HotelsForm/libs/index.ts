import {HotelModel} from "../model";

export const mapHotelsToSelect = (cities: HotelModel[]) => cities.map((city) => ({
  ...city,
  value: city.name
}))
