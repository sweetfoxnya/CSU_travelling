import {useMutation} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {BOOKING_API} from "@shared";

export const sendFull = (data: any) => {
    return instance.post(BOOKING_API + '/api/ui_root', data);
}

export const useFull = () => useMutation({
    mutationFn: sendFull,
    mutationKey: ['full']
})
