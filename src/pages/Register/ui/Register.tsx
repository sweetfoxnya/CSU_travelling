import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";

import {RegisterForm, RegisterType} from "@features/auth";

import {register} from "../api";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: RegisterType) => {
    mutation.mutate(data);
  }

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate('/');
      alert('Успех!');
    }
  });

  return (
    <div>
      <Link to='/'>
        Home
      </Link>
      <RegisterForm handleFormSubmit={handleSubmit} />
    </div>
  );
};
