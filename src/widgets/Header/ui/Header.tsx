import React from 'react';

import {NavMenu} from "@features/nav";
import {Avatar} from "@entities/Avatar";
import { Logo } from '@shared';

import * as SC from './Header.styles';

export const Header = () => {

  return (
    <SC.Container>
      <SC.Header>
        <Logo />
        <NavMenu />
        <Avatar image={''}/>
      </SC.Header>
    </SC.Container>
  );
};
