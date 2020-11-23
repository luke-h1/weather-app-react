import React, { useState } from 'react';

import {
  FormInput,
  FormTitle,
  WeatherForm,
  FormWrapper,
  SubmitBtn,
} from './FormElements';

const Form = () => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '' || null) {
      // fetch weather
    } else {
      // show error
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <>
      <FormWrapper>
        <FormTitle>Enter your city to get weather</FormTitle>
        <WeatherForm onSubmit={onSubmit}>
          <FormInput
            type='text'
            name='text'
            placeholder='get weather'
            value={text}
            onChange={onChange}
          />
          <SubmitBtn type='submit' value='submit' round='true' />
        </WeatherForm>
      </FormWrapper>
    </>
  );
};
export default Form;
