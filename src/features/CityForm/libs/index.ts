import {CityModel} from "../model";

export const mapCitiesToSelect = (cities: CityModel[]) => cities.map((city) => ({
  ...city,
  value: city.city
}))
