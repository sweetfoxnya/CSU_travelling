import React, {createContext} from 'react';

import {MultiStepForm} from "@widgets/MultiStep";
import {useStore} from "@shared/hooks";
import {useFull} from "@widgets/ExcursionFull";

const Context = createContext({});

export const ExcursionFull = () => {
    const {full: {setData}} = useStore();

    const {data: fullResponse, mutate: sendFull} = useFull();

    const handleSubmit = (data: any) => {
        sendFull(data);
    }

    return (
        <Context.Provider value={{setData, handleSubmit}}>
            <MultiStepForm context={Context} multiStepCase='full'/>
        </Context.Provider>
    );
};
