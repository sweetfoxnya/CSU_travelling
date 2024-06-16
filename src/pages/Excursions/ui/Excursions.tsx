import React from 'react';

import {ExcursionIterable} from "@widgets/ExcursionIterable";
import {ExcursionSimple} from "@widgets/ExcursionSimple";
import {ExcursionFull} from "@widgets/ExcursionFull";
import {ExcursionCityEvents} from "@widgets/ExcursionCityEvents";
import {ExcursionEvents} from "@widgets/ExcursionEvents";
import {Container} from "@shared";

import * as SC from './Excursions.styles';

export const Excursions = () => {
  return (
    <Container>
      <SC.Wrapper>
        <p>
          1 юзкейс
        </p>
        <ExcursionSimple/>
        <p>
          2 юзкейс
        </p>
        <ExcursionIterable/>
        <p>
          3 юзкейс
        </p>
        <ExcursionFull/>
        <p>
          4 юзкейс
        </p>
        <ExcursionCityEvents/>
        <p>
          5 юзкейс
        </p>
        <ExcursionEvents/>
      </SC.Wrapper>
    </Container>
  );
};
