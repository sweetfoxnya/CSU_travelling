import React from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";

import {Flex} from "@shared";
import {Datepicker} from "@features/Datepicker";
import {DateFormProps} from "@features/DateForm";

import * as SC from './DateForm.styles';

interface FormProps {
    handleFormSubmit: (data: DateFormProps) => void;
}

export const DateForm = ({handleFormSubmit}: FormProps) => {
    const {control, handleSubmit} = useForm<DateFormProps>();

    const onSubmit: SubmitHandler<DateFormProps> = (data) => {
        console.log(data);
        handleFormSubmit(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction='column'>
                    <SC.Wrapper>
                        <SC.DateWrapper>
                            <Controller
                                name="startDate"
                                control={control}
                                defaultValue={new Date()}
                                render={({field}) => (
                                    <Datepicker
                                        selected={field.value}
                                        onChange={(date: Date) => field.onChange(date)}
                                    />
                                )}
                            />
                            <Controller
                                name="endDate"
                                control={control}
                                defaultValue={new Date()}
                                render={({field}) => (
                                    <Datepicker
                                        selected={field.value}
                                        onChange={(date: Date) => field.onChange(date)}
                                    />
                                )}
                            />
                        </SC.DateWrapper>
                        <button type="submit">
                            Сохранить шаг
                        </button>
                    </SC.Wrapper>
                </Flex>
            </form>
        </div>
    );
};

