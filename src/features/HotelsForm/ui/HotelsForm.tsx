import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {HotelModel, HotelSelectModel, HotelsFormProps} from "../model";
import {mapHotelsToSelect} from "../libs";
import {useHotels} from "../api";

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

interface FormProps {
  handleFormSubmit: (data: HotelModel) => void;
}

export const HotelsForm = ({ handleFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors}
  } = useForm<HotelsFormProps>();

  const { data, isPending, isError } = useHotels();

  if (isPending) {
    return <>loading</>;
  }

  if (isError) {
    return <>error</>;
  }

  const options = mapHotelsToSelect(data);

  const onSubmit: SubmitHandler<HotelsFormProps> = ({ hotel }) => {
    handleFormSubmit(hotel);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<HotelSelectModel>
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
