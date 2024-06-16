import axios, {AxiosHeaders} from "axios";

import {API_PATH} from "@shared";

export const getToken = () => {
  const cookies = document.cookie.split(';');
  const tempCookies = cookies.map((c) => c.trim());

  let token: string;

  tempCookies.forEach((c) => {
    const [key, value] = c.split('=');

    if (key === 'token') {
      token = value;
    }
  })

  return token ?? '';
}

const token = getToken();

export const instance = axios.create({
  baseURL: API_PATH,
  headers: new AxiosHeaders({
    'token': token,
  })
})
