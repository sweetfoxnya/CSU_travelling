import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {CityFormProps, CityModel, CitySelectModel} from "../model";
import {mapCitiesToSelect} from "../libs";

import * as SC from './CityForm.styles';

const mockCities: CityModel[] = [
  {
    id: 0,
    city: 'Moscow'
  },
  {
    id: 1,
    city: 'Chelyabinsk'
  },
];

interface FormProps {
  handleFormSubmit: (data: CityFormProps) => void;
}

export const CityForm = ({ handleFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<CityFormProps>();

  const optionsFrom = mapCitiesToSelect(mockCities);
  const optionsTo = mapCitiesToSelect(mockCities);

  const onSubmit: SubmitHandler<CityFormProps> = (data) => {
    console.log(data);
    handleFormSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column'>
        <SC.Wrapper>
          <Select<CitySelectModel>
            name='cityFrom'
            options={optionsFrom}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <Select<CitySelectModel>
            name='cityTo'
            options={optionsTo}
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
