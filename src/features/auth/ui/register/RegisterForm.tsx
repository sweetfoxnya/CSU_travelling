import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import {Input} from "@shared";

import {RegisterType} from "../../model";
import * as SC from "./RegisterForm.styles";

interface RegisterFormProps {
  handleFormSubmit: (data: RegisterType) => void;
}

const Error = () => <span style={{color: 'red'}}>Что-то не так(</span>;

export const RegisterForm = (props: RegisterFormProps) => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterType>();

  const {handleFormSubmit} = props;
  const onSubmit: SubmitHandler<RegisterType> = (data) => {
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
            {...register('email', {required: true})}
          />
          {errors.email && <Error />}
          <SC.Horizon>
            <SC.Box>
              <Input
                type={isShownPass ? 'text' : 'password'}
                placeholder='Password'
                {...register('password', {required: true, minLength: 8})}
              />
              {errors.password && <Error />}
              <Input
                type={isShownPass ? 'text' : 'password'}
                placeholder='Repeat password'
                {...register('passwordCheck', {required: true, minLength: 8})}
              />
              {errors.passwordCheck && <Error />}
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
