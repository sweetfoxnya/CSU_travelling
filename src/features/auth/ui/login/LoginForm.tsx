import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import {Input} from "@shared";

import {LoginType} from "../../model";
import * as SC from './LoginForm.styles';

export const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  }

  const [isShownPass, setIsShownPass] = useState(false);

  return (
    <div>
      <SC.LoginForm>
        <SC.MainContainer>
          <SC.CheckBox type="checkbox" aria-hidden="true" id="chk"/>
          <SC.SignUp>
            <SC.Form>
              <SC.SignUpLabel htmlFor='chk' aria-hidden="true">Login</SC.SignUpLabel>
              <SC.Input type="text" placeholder="User name"/>
              <SC.Input type="password" placeholder="Password" />
              <SC.Button>Login</SC.Button>
            </SC.Form>
          </SC.SignUp>
          <SC.Login>
            <SC.Form>
              <SC.LabelForLogin htmlFor='chk' aria-hidden="true">SignUp</SC.LabelForLogin>
              <SC.Input type="text" placeholder="User name" />
              <SC.Input type="email" placeholder="Email" />
              <SC.Input type="password" placeholder="Password" />
              <SC.Button>SignUp</SC.Button>
            </SC.Form>
          </SC.Login>
        </SC.MainContainer>
      </SC.LoginForm>)

    </div>
  );
};
