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
      <SC.SignUpForm>
        <SC.MainContainer>
          <SC.CheckBox type="checkbox" aria-hidden="true" id="chk"/>
          <SC.SignUp>
            <SC.Form>
              <SC.SignUpLabel htmlFor='chk' aria-hidden="true">SignUp</SC.SignUpLabel>
              <SC.Input type="text" placeholder="User name"/>
              <SC.Input type="email" placeholder="Email"/>
              <SC.Input type="password" placeholder="Password" />
              <SC.Button>SignUp</SC.Button>
            </SC.Form>
          </SC.SignUp>
          <SC.Login>
            <SC.Form>
              <SC.LabelForLogin htmlFor='chk' aria-hidden="true">Login</SC.LabelForLogin>
              <SC.Input type="text" placeholder="User name" />
              <SC.Input type="password" placeholder="Password" />
              <SC.Button>Login</SC.Button>
            </SC.Form>
          </SC.Login>
        </SC.MainContainer>
      </SC.SignUpForm>
    </div>
  );
};
