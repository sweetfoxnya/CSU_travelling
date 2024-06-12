import React, {ComponentPropsWithoutRef} from 'react';

interface SelectOptionModel {
  value: string;
  id: number;
}

interface SelectProps<T extends SelectOptionModel> extends ComponentPropsWithoutRef<'select'> {
  register: any,
  options: Array<T>,
  name: string,
}

export function Select<T extends SelectOptionModel>({ register, options, name, ...rest }: SelectProps<T>) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value.value} value={value.id}>
          {value.value}
        </option>
      ))}
    </select>
  )
}
