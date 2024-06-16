import React, {useState} from 'react';
import Base from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: any) => {
    console.log(date)
  }

  return (
    <Base selected={startDate} onChange={handleChange} />
  );
};
