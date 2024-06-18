import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

const getEventsList = () => {
  return instance.get(API_PATH + '/hotels/search_hotels')
}

export const useHotels = () => {
  return useQuery({
    queryFn: getEventsList,
    queryKey: ['hotels'],
    select: ({data}) => data,
    refetchOnMount: false,
  })
}
