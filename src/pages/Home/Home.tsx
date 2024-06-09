import React from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <ul style={{
        padding: '30px'
      }}>
        <li>
          <Link to='/'>
            HOME
          </Link>
        </li>
        <li>
          <Link to='auth/register'>
            REGISTER
          </Link>
        </li>
        <li>
          <Link to='auth/login'>
            LOGIN
          </Link>
        </li>
      </ul>
    </div>
  );
};
