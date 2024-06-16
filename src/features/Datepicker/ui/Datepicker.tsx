import React from 'react';
import Base from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatepickerProps {
    selected: Date,
    onChange: (date: Date) => void,
}

export const Datepicker = ({selected, onChange}: DatepickerProps) => {
    return (
        <Base
            dateFormat="dd.MM.yyyy"
            selected={selected}
            onChange={onChange}
        />
    );
};
