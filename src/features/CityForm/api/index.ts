import {useQuery} from "@tanstack/react-query";

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
  // return axios.get(ROUTES_API + '/cities/')
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
