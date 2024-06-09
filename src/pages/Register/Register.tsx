import React from 'react';
import {Link} from "react-router-dom";

import {RegisterForm} from "@features/auth";

export const Register = () => {
  return (
    <div>
      <Link to='/'>
        Home
      </Link>
      <RegisterForm/>
    </div>
  );
};
