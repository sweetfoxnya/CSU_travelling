import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {TransportFormProps, TransportModel, TransportSelectModel} from "../model";
import {mapCitiesToSelect} from "../libs";

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

export const TransportForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors}
  } = useForm<TransportFormProps>();

  const optionsFrom = mapCitiesToSelect(mockTransport);

  const onSubmit: SubmitHandler<TransportFormProps> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<TransportSelectModel>
            name='transport'
            options={optionsFrom}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <button type='submit'>
            Submit
          </button>
        </SC.Wrapper>
      </Flex>
    </form>
  );
};
