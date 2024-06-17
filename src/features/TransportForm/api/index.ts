import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

export const getTransportList = () => {
  return instance.get('/transport/types');
}

export const useCityEvents = () => {
  return useQuery({
    queryFn: getTransportList,
    queryKey: ['transport'],
    select: ({data}) => data,
  })
}
