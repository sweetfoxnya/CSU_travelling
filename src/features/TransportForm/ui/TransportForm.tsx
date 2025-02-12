import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Flex, Select} from "@shared";

import {TransportFormProps, TransportModel, TransportSelectModel} from "../model";
import {mapCitiesToSelect} from "../libs";
import {useCityEvents} from "../api";

import * as SC from './TransportForm.styles';

interface FormProps {
  handleFormSubmit: (data: TransportModel) => void;
}

export const TransportForm = ({ handleFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors}
  } = useForm<TransportFormProps>();

  const { data, isPending, isError } = useCityEvents();

  if (isPending) {
    return <p>
      loading
    </p>
  }

  if (isError) {
    return <p>
      error(
    </p>
  }

  const options = mapCitiesToSelect(data);

  const onSubmit: SubmitHandler<TransportFormProps> = ({ transport }) => {
    handleFormSubmit(transport);
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
