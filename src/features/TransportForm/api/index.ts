import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";

export const getTransportList = () => {
  return instance.get('http://localhost:8099/api/v1/transport/types')
}

export const useCityEvents = () => {
  return useQuery({
    queryFn: getTransportList,
    queryKey: ['transport'],
    select: ({data}) => data,
  })
}
