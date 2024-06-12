import React from 'react';
import Select from 'react-select';

interface OptionType {
    value: number,
    label: string,
}

interface BaseSelectProps {
    options?: OptionType[];
    width?: string;
    value?: OptionType | null;
    onChange?: (selectedOption: OptionType | null) => void;
}

export const BaseSelect = ({options, value, onChange, width = '400px', ...rest}: BaseSelectProps) => {
    const styles = {
        container: (provided: any) => ({
            ...provided,
            width: width,
        })
    }

    return (
        <Select
            isClearable
            isSearchable
            options={options}
            value={value}
            onChange={onChange}
            styles={styles}
            {...rest}
        />
    );
};
