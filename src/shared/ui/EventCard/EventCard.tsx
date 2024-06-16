import React from 'react';

interface EventProps {
  id: number;
  title: string;
  text: string;
  cityCode?: string;
  dateStart: string;
  dateEnd: string;
}

import * as SC from './EventCard.styles';

export const EventCard = (props: EventProps) => {
  return (
    <SC.Wrapper>
      <h1>
        {props.title}
      </h1>
      <SC.Content>
        <p>
          {props.text}
        </p>
        <p>
          Даты: {props.dateStart} - {props.dateEnd}
        </p>
        {props?.cityCode && (
          <p>
            Код города: {props.cityCode}
          </p>
        )}
      </SC.Content>
    </SC.Wrapper>
  );
};
