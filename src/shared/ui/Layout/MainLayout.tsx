import React from 'react';
import {Outlet} from "react-router-dom";

import * as Styles from './styles';

export const MainLayout = () => {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Outlet />
      </Styles.Container>
    </Styles.Wrapper>
  );
};
