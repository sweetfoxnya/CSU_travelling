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
          1 юзкейс(simple)
        </Link>
        <Link to='/excursions/iterable'>
          2 юзкейс(iterable)
        </Link>
        <Link to='/excursions/full'>
          3 юзкейс(full)
        </Link>
        <Link to='/excursions/events'>
          4 юзкейс(events)
        </Link>
        <Link to='/excursions/cityEvents'>
          5 юзкейс(cityEvents)
        </Link>
      </SC.Wrapper>
    </Container>
  );
};
