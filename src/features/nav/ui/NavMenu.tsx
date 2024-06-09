import React from 'react';

import * as SC from './NavMenu.styles';

export const NavMenu = () => {
  return (
    <SC.Container>
      <SC.Link to='/'>
        Home
      </SC.Link>
      <SC.Link to='/auth/login'>
        Login
      </SC.Link>
      <SC.Link to='/auth/register'>
        Register
      </SC.Link>
      <SC.Link to='/profile'>
        Profile
      </SC.Link>
    </SC.Container>
  );
};
