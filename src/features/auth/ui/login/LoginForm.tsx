import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import {Input} from "@shared";

import {LoginType} from "../../model";
import * as SC from './LoginForm.styles';

interface LoginProps {
  handleFormSubmit: (data: LoginType) => void;
}

export const LoginForm = ({ handleFormSubmit }: LoginProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    handleFormSubmit(data);
  }

  const [isShownPass, setIsShownPass] = useState(false);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SC.Box>
          <Input
            type='text'
            placeholder='Email'
            {...register('login')}
          />
          <SC.Horizon>
            <Input
              type={isShownPass ? 'text' : 'password'}
              placeholder='Password'
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setIsShownPass(prev => !prev)}
            >
              @
            </button>
          </SC.Horizon>
          <button type='submit'>
            Submit
          </button>
        </SC.Box>
      </form>
      <Link to='/auth/register'>Register</Link>
    </div>
  );
};
