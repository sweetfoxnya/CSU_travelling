import React from 'react';

import {Avatar} from "@entities/Avatar";
import {NavMenu} from "@features/nav";

import * as SC from './Header.styles';

export const Header = () => {

  return (
    <SC.Container>
      <SC.Header>
        <NavMenu />
        <Avatar image={''}/>
      </SC.Header>
    </SC.Container>
  );
};
