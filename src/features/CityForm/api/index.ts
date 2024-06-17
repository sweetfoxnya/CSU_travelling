import {useQuery} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

const getCitiesList = () => {
  return instance.get(API_PATH + '/cities/')
}

export const useCities = () => {
  return useQuery({
    queryFn: getCitiesList,
    queryKey: ['cities'],
    select: ({data}) => data,
    refetchOnMount: false,
  })
}
