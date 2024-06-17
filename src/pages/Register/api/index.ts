import axios from "axios";
import {API_PATH} from "@shared";
import {RegisterType} from "@features/auth";

const instance = axios.create({
  baseURL: API_PATH + '/auth',
})

export const register = ({email, password}: RegisterType) => {
  return instance.post('/signup?client_id=Rh4ZomeoWHFJus8KbspWqJTtXHcMGkLHAZ30qgCD3RK3rTHJ', {
    email,
    password,
  })
}
