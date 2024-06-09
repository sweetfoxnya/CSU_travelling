import React from 'react';
import {Link} from "react-router-dom";

import {LoginForm} from "@features/auth";

export const Login = () => {
  return (
    <div>
      <Link to='/'>
        Home
      </Link>
      <LoginForm />
    </div>
  );
};
