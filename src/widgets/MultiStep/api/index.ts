import {instance} from "@shared/libs";
import {API_PATH} from "@shared";

export const sendSimple = (data: any) => {
  return instance.post(API_PATH + '/api/ui_root', data);
}

export const sendIterable = (data: any) => {
  return instance.post(API_PATH + '/api/ui_root', data);
}

export const sendFull = (data: any) => {
  return instance.post(API_PATH + '/api/ui_root', data);
}



export const sendCityEvents = (data: any) => {
  return instance.post(API_PATH + '/api/ui_root', data);
}
