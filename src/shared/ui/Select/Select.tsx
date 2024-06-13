import React from 'react';
import {UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";

import { BaseSelect } from "@shared";

interface SelectOptionModel {
  value: number;
  label: string;
}

interface SelectProps<T extends SelectOptionModel> {
  register: UseFormRegister<any>,
  setValue: UseFormSetValue<any>,
  watch: UseFormWatch<any>,
  options: Array<T>,
  name: string,
}

export function Select<T extends SelectOptionModel>({ register, setValue, watch, options, name, ...rest }: SelectProps<T>) {
  const selectedValue = watch(name);

  const handleChange = (selectedOption: T | null) => {
    setValue(name, selectedOption);
  };

  return (
      <BaseSelect
          options={options}
          value={selectedValue}
          onChange={handleChange}
          {...rest}
      />
  );
}
