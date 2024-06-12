import React, {useState} from 'react';
import Select from 'react-select'

interface OptionType {
    value: number,
    label: string,
}

interface BaseSelectProps {
    options?: OptionType[];
    width?: string,
}

export const BaseSelect = ({ options, width = '500px' }: BaseSelectProps) => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
    };

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
                value={selectedOption}
                onChange={handleChange}
                styles={styles}
            />
    );
};
