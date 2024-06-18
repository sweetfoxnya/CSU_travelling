import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";
import {CityModel} from "@features/CityForm";

const mockCities: CityModel[] = [
  {
    id: 0,
    city: 'Moscow'
  },
  {
    id: 1,
    city: 'Chelyabinsk'
  },
];

const getCitiesList = () => {
  // return instance.get(API_PATH + '/cities/')
  return {
    data: mockCities
  }
}

export const useCities = () => {
  return useQuery({
    queryFn: getCitiesList,
    queryKey: ['cities'],
    select: ({data}) => data,
    refetchOnMount: false,
  })
}
