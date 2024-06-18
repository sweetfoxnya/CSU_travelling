import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

const getEventsList = () => {
  return instance.get(API_PATH + '/events')
}

export const useEvents = () => {
  return useQuery({
    queryFn: getEventsList,
    queryKey: ['eventsForm'],
    select: ({data}) => data,
    refetchOnMount: false,
  })
}
