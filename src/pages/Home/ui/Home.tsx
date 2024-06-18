import React from 'react';
import {observer} from "mobx-react";

import {Container} from "@shared";
import {Header} from "@widgets/Header";

export const Home = observer(() => {
  return (
    <Container>
      <div style={{background: 'black'}}>
        <Header />
      </div>
    </Container>
  );
});
