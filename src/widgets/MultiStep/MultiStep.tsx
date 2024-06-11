import React, {useState} from 'react';
import MultiStep from 'react-multistep'

export const MultiStepForm = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <MultiStep
      activeStep={activePage}
    >
      <form title='step 1'>
        <label>name</label>
        <input type='text'/>
        <label>pass</label>
        <input type='text'/>
      </form>
      <div title='step 2'>2</div>
      <div title='step 3'>3</div>
    </MultiStep>
  );
};
