import {CityModel} from "../model";

export const mapCitiesToSelect = (cities: CityModel[]) => cities.map((city) => ({
  label: city.city,
  value: city.id,
}))
