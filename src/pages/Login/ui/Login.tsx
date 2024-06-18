import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LoginForm, LoginType} from "@features/auth";
import {useMutation} from "@tanstack/react-query";

import {useToken} from "@shared/hooks";

import {login} from "../api";

export const Login = () => {
  const navigate = useNavigate();
  const [_, setToken] = useToken();

  const handleSubmit = (data: any) => {
    console.log(data);
    mutation.mutate(data);
  }

  const mutation = useMutation({
    mutationFn: (data: LoginType) => login(data)
      .then((res) => {
      setToken(res.data.access_token);
    }),
    onSuccess: () => {
      navigate('/');
      alert('вы вошли!');
    }
  });

  return (
      <LoginForm handleFormSubmit={handleSubmit}/>
  );
};
