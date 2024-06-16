import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {EventModel, EventSelectModel, EventsFormProps} from "../model";
import {mapEventsToSelect} from "../libs";

import * as SC from './EventsForm.styles';

const mockHotels: EventModel[] = [
  {
    id: 0,
    name: 'Вечеринка'
  },
  {
    id: 1,
    name: 'Дискотэка'
  },
];

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

  const options = mapEventsToSelect(mockHotels);

  const onSubmit: SubmitHandler<EventsFormProps> = (data) => {
    console.log(data);
    handleFormSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<EventSelectModel>
            name='hotel'
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
