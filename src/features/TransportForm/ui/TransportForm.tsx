import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {TransportFormProps, TransportModel, TransportSelectModel} from "../model";
import {mapCitiesToSelect} from "../libs";
import {useCityEvents} from "../api";

import * as SC from './TransportForm.styles';

const mockTransport: TransportModel[] = [
  {
    id: 0,
    name: 'Поезд'
  },
  {
    id: 1,
    name: 'Мошина'
  },
];

interface FormProps {
  handleFormSubmit: (data: TransportFormProps) => void;
}

export const TransportForm = ({ handleFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors}
  } = useForm<TransportFormProps>();

  // TODO тут вернуть, когда будет бэк
  // const { data, isPending, isError } = useCityEvents();
  //
  // if (isPending) {
  //   return <p>
  //     loading
  //   </p>
  // }
  //
  // if (isError) {
  //   return <p>
  //     error(
  //   </p>
  // }

  const options = mapCitiesToSelect(mockTransport);

  const onSubmit: SubmitHandler<TransportFormProps> = (data) => {
    console.log(data);
    handleFormSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<TransportSelectModel>
            name='transport'
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
