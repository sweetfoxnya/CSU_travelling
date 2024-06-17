import {useMutation} from "@tanstack/react-query";

import {ExcursionIterable} from "@widgets/MultiStep";
import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

const sendIterable = (data: ExcursionIterable) => {
  return instance.post(API_PATH + '/api/ui_root', data);
}

export const useIterable = () => useMutation({
  mutationFn: sendIterable,
  mutationKey: ['iterable']
})
