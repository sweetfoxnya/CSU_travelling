import React, {useMemo} from 'react';
import MultiStep from "react-multistep";
import {observer} from "mobx-react";

import {DateForm, DateFormProps} from "@features/DateForm";
import {EventsForm, EventsFormProps} from "@features/EventsForm";
import {ExcursionSimple} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";
import {Button} from "@shared";

import * as SC from "./Events.styles";

interface EventsProps {
    activePage: number,
    handleEventsSubmit: (data: EventsFormProps) => void;
    handleDateSubmit: (data: DateFormProps) => void;
    handleSubmit: (data: ExcursionSimple) => void;
}

export const Events = observer(({
 activePage,
 handleDateSubmit,
 handleEventsSubmit,
 handleSubmit,
}: EventsProps) => {
    const { events: {
        data,
    }} = useStore();

    console.log('store data', {...data})

    const isFinish = useMemo(() => {
        return Boolean(data && data.date && data.events)
    }, [data]);

    return (
       <SC.Container>
           <MultiStep
               activeStep={activePage}
               showNavigation={false}
           >
               <SC.Wrapper title='Дата'>
                   <DateForm handleFormSubmit={handleDateSubmit}/>
               </SC.Wrapper>
               <SC.Wrapper title='События'>
                   <EventsForm handleFormSubmit={handleEventsSubmit}/>
               </SC.Wrapper>
           </MultiStep>
           <Button
               disabled={!isFinish}
               onClick={() => {
                   if (isFinish) {
                       // @ts-ignore
                       handleSubmit(data)
                   }
               }}
           >
               Отправить на бронь!
           </Button>
       </SC.Container>
)});
