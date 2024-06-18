import {useMutation} from "@tanstack/react-query";

import {ExcursionIterable} from "@widgets/MultiStep";
import {instance} from "@shared/libs";
import {BOOKING_API} from "@shared";

const sendIterable = (data: ExcursionIterable) => {
  return instance.post(BOOKING_API + '/api/ui_root', data);
}

export const useIterable = () => useMutation({
  mutationFn: sendIterable,
  mutationKey: ['iterable']
})
