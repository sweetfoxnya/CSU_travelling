import React from 'react';

import {ExcursionIterable} from "@widgets/ExcursionIterable";
import {ExcursionSimple} from "@widgets/ExcursionSimple";
import {ExcursionFull} from "@widgets/ExcursionFull";
import {ExcursionCityEvents} from "@widgets/ExcursionCityEvents";
import {ExcursionEvents} from "@widgets/ExcursionEvents";
import {Container} from "@shared";

import * as SC from './Excursions.styles';
import {Link} from "react-router-dom";

export const Excursions = () => {
  return (
    <Container>
      <SC.Wrapper>
        <Link to='simple'>
          1 юзкейс
        </Link>
        <Link to='/excursions/iterable'>
          2 юзкейс
        </Link>
        <Link to='/excursions/full'>
          3 юзкейс
        </Link>
        <Link to='/excursions/events'>
          4 юзкейс
        </Link>
        <Link to='/excursions/cityEvents'>
          5 юзкейс
        </Link>
      </SC.Wrapper>
    </Container>
  );
};
