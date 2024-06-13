import {HotelModel} from "../model";

export const mapHotelsToSelect = (cities: HotelModel[]) => cities.map((city) => ({
  value: city.id,
  label: city.name
}))
