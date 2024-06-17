import {useMutation} from "@tanstack/react-query";

import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

export const sendEvents = (data: any) => {
    return instance.post(API_PATH + '/api/ui_root', data);
}

export const useEvents = () => useMutation({
    mutationFn: sendEvents,
    mutationKey: ['events']
})
