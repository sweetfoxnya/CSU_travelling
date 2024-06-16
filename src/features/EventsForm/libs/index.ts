import {EventModel} from "../model";

export const mapEventsToSelect = (cities: EventModel[]) => cities.map((city) => ({
  value: city.id,
  label: city.name
}))
