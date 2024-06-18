import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {EventModel, EventSelectModel, EventsFormProps} from "../model";
import {mapEventsToSelect} from "../libs";
import {useEvents} from "../api";

import * as SC from './EventsForm.styles';

interface FormProps {
  handleFormSubmit: (data: EventsFormProps) => void;
}

export const EventsForm = ({ handleFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors}
  } = useForm<EventsFormProps>();

  const { data, isPending, isError } = useEvents();

  if (isPending) {
    return <>loading</>;
  }

  if (isError) {
    return <>error</>;
  }

  const options = mapEventsToSelect(data);

  const onSubmit: SubmitHandler<EventsFormProps> = (data) => {
    // @ts-ignore
    handleFormSubmit([data.events]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<EventSelectModel>
            name='events'
            options={options}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <button type='submit'>
            Сохранить шаг
          </button>
        </SC.Wrapper>
      </Flex>
    </form>
  );
};
