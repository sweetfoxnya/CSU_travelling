import React from 'react';
import {observer} from "mobx-react";

import {Container, EventCard} from "@shared";
import {useStore} from "@shared/hooks";

export const Home = observer(() => {
  const { simple: {
    data, setData
  } } = useStore();

  console.log(data);
  return (
    <Container>
      <EventCard id={1} title={'title'} text={'Tetxt'} cityCode={'174'} dateStart={'17.06.24'} dateEnd={'17.06.24'} />
    </Container>
  );
});
