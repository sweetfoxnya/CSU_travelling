import React from 'react';

import {Avatar} from "@entities/Avatar";
import {NavMenu} from "@features/nav";

export const Header = () => {
  return (
    <header>
      <NavMenu />
      <Avatar />
    </header>
  );
};
