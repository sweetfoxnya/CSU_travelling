import React from 'react';

import {Header} from "@widgets/Header";

import * as SC from "./Home.styles";

export const Home = () => {
  return (
    <SC.Container>
      <SC.Content>
        <Header />
        <SC.Title>
          <SC.TitleTop>Путешествуй</SC.TitleTop>
          <SC.TitleMiddle>вместе с</SC.TitleMiddle>
          <SC.TitleBottom>RusVenture</SC.TitleBottom>
        </SC.Title>
        <SC.ExcursionButton>
          К экскурсиям →
        </SC.ExcursionButton>
      </SC.Content>
    </SC.Container>
  );
};
