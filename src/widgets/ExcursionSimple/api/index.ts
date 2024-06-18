import {useMutation} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {BOOKING_API} from "@shared";

export const sendSimple = (data: any) => {
    return instance.post(BOOKING_API + '/api/ui_root', data);
}

export const useSimple = () => useMutation({
    mutationFn: sendSimple,
    mutationKey: ['simple']
})
