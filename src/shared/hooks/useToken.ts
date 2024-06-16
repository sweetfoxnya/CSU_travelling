import {useCookies} from "react-cookie";

export const useToken = () => {
  const [cookies, setCookies, removeCookies] = useCookies(['token']);

  const { token } = cookies;

  const setToken = (value: string) => {
    setCookies('token', value);
  }

  const removeToken = () => {
    removeCookies('token');
  }

  return [
    token,
    setToken,
    removeToken,
  ];
}
