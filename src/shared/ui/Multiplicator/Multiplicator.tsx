import React from 'react';
import {useFieldArray, useForm} from "react-hook-form";

import {Select} from "../Select";

interface SelectOption {
  value: number;
  label: string;
}

interface MultiplicatorProps<T extends SelectOption> {
  handleFormSubmit: (data: {
    // id's
    array: string[]
  }) => void;
  options: Array<T>;
}

export function Multiplicator<T extends SelectOption>({
  handleFormSubmit,
  options,
}: MultiplicatorProps<T>) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: "array",
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Select
              name={`array.${index}`}
              options={options}
              register={register}
              setValue={setValue}
              watch={watch}
            />
            <button type="button" onClick={() => remove(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ id: '', value: '' })}
      >
        Добавить
      </button>
      <input type="submit" />
    </form>
  );
};
