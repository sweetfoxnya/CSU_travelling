import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";
import {EventModel} from "@features/EventsForm";

const mockEvents: EventModel[] = [
  {
    id: 0,
    name: 'Вечеринка'
  },
  {
    id: 1,
    name: 'Дискотэка'
  },
];

const getEventsList = () => {
  // return instance.get(API_PATH + '/events')
  return {
    data: mockEvents
  }
}

export const useEvents = () => {
  return useQuery({
    queryFn: getEventsList,
    queryKey: ['eventsForm'],
    select: ({data}) => data,
    refetchOnMount: false,
  })
}
