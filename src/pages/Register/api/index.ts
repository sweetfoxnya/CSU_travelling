import axios from "axios";
import {API_PATH} from "@shared";
import {RegisterType} from "@features/auth";

const instance = axios.create({
  baseURL: API_PATH,
})

export const register = ({email, password}: RegisterType) => {
  return instance.post('/signup', {
    email,
    password,
  })
}
