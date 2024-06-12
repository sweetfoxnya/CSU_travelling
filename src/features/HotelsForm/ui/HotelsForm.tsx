import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {HotelsFormProps, HotelModel, HotelSelectModel} from "../model";
import {mapHotelsToSelect} from "../libs";

import * as SC from './HotelsForm.styles';

const mockHotels: HotelModel[] = [
  {
    id: 0,
    name: 'Кооператор'
  },
  {
    id: 1,
    name: 'Radisson'
  },
];

export const HotelsForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<HotelsFormProps>();

  const options = mapHotelsToSelect(mockHotels);

  const onSubmit: SubmitHandler<HotelsFormProps> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<HotelSelectModel>
            name='hotel'
            options={options}
            register={register}
          />
          <button type='submit'>
            Submit
          </button>
        </SC.Wrapper>
      </Flex>
    </form>
  );
};
