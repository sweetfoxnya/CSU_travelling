import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import {Input} from "@shared";

import {RegisterType} from "../../model";
import * as SC from "./RegisterForm.styles";

export const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterType>();
  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log(data);
  }

  const [isShownPass, setIsShownPass] = useState(false);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SC.Box>
          <Input
            type='text'
            placeholder='Login'
            {...register('login')}
          />
          <SC.Horizon>
            <SC.Box>
              <Input
                type={isShownPass ? 'text' : 'password'}
                placeholder='Password'
                {...register('password')}
              />
              <Input
                type={isShownPass ? 'text' : 'password'}
                placeholder='Repeat password'
                {...register('passwordCheck')}
              />
            </SC.Box>
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
      <Link to='/auth/login'>Login</Link>
    </div>
  );
};
