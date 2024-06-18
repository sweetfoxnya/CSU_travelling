import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";
import {TransportModel} from "@features/TransportForm";

const mockTransport: TransportModel[] = [
  {
    id: 0,
    name: 'Поезд'
  },
  {
    id: 1,
    name: 'Мошина'
  },
];

export const getTransportList = () => {
  // return axios.get(TRANSPORT_API + '/transport/types');
  return {
    data: mockTransport
  }
}

export const useCityEvents = () => {
  return useQuery({
    queryFn: getTransportList,
    queryKey: ['transport'],
    select: ({data}) => data,
  })
}
