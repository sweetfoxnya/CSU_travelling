import React from 'react';
import {observer} from "mobx-react";

import {Container} from "@shared";
import {useStore} from "@shared/hooks";

export const Home = observer(() => {
  const { simple: {
    data, setData
  } } = useStore();

  console.log(data);
  return (
    <Container>
      Home
      <button onClick={() => {
        // @ts-ignore
        setData({ transport: 1 })
      }}>
        click
      </button>
    </Container>
  );
});
