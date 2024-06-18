import React from 'react';
import {Link} from "react-router-dom";

import {Container} from "@shared";

import * as SC from './Excursions.styles';
import {NavMenu} from "@features/nav";
import {NavBar} from "@pages/Excursions/ui/NavBar";
import {Title} from "./Excursions.styles";

export const Excursions = () => {
  return (
    <SC.Container>
      <NavBar/>
      <SC.Title> Выбери тип экскурсии</SC.Title>
      <SC.Wrapper>
        <SC.Link to='simple'>
          1 юзкейс(simple)
        </SC.Link>
        <SC.Link to='/excursions/iterable'>
          2 юзкейс(iterable)
        </SC.Link>
        <SC.Link to='/excursions/full'>
          3 юзкейс(full)
        </SC.Link>
        <SC.Link to='/excursions/cityEvents'>
          4 юзкейс(cityEvents)
        </SC.Link>
        <SC.Link to='/excursions/events'>
          5 юзкейс(events)
        </SC.Link>
      </SC.Wrapper>
    </SC.Container>
  );
};
