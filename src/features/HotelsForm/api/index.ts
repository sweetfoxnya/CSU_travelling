import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";
import {HotelModel} from "@features/HotelsForm";

const mockHotels: HotelModel[] = [
  {
    id: 0,
    name: 'Кооператор'
  },
  {
    id: 1,
    name: 'Radisson'
  },
];

const getHotelsList = () => {
  // return axios.get(HOTELS_API + '/hotels/search_hotels')
  return {
    data: mockHotels,
  }
}

export const useHotels = () => {
  return useQuery({
    queryFn: getHotelsList,
    queryKey: ['hotels'],
    select: ({data}) => data,
    refetchOnMount: false,
  })
}
