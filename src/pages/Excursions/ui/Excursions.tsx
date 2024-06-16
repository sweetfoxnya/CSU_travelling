import React from 'react';

import {ExcursionIterable} from "@widgets/ExcursionIterable";
import {Container} from "@shared";

import * as SC from './Excursions.styles';

export const Excursions = () => {
  return (
    <Container>
      <SC.Wrapper>
        <p>
          2 юзкейс
        </p>
        <ExcursionIterable/>
      </SC.Wrapper>
    </Container>
  );
};
