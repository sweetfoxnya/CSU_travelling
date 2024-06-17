import axios from "axios";

import {LoginType} from "@features/auth";
import {API_PATH} from "@shared";

const instance = axios.create({
  baseURL: API_PATH + '/auth',
})

export const login = (data: LoginType) => {
  return instance.post('/signin?client_id=Rh4ZomeoWHFJus8KbspWqJTtXHcMGkLHAZ30qgCD3RK3rTHJ', data);
}
