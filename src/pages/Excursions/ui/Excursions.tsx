import React from 'react';
import {Link} from "react-router-dom";

import {Container} from "@shared";

import * as SC from './Excursions.styles';

export const Excursions = () => {
  return (
    <Container>
      <SC.Wrapper>
        <Link to='simple'>
          1 юзкейс(simple)
        </Link>
        <Link to='/excursions/iterable'>
          2 юзкейс(iterable)
        </Link>
        <Link to='/excursions/full'>
          3 юзкейс(full)
        </Link>
        <Link to='/excursions/cityEvents'>
          4 юзкейс(cityEvents)
        </Link>
        <Link to='/excursions/events'>
          5 юзкейс(events)
        </Link>
      </SC.Wrapper>
    </Container>
  );
};
