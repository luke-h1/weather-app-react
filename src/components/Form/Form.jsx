import React, { useState } from "react";

import {
  FormInput,
  FormTitle,
  WeatherForm,
  FormWrapper,
  SubmitBtn,
} from "./FormElements";

const Form = () => {
  const [city, setCity] = useState("");

  const fetchWeather = async (city) => {
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY}&q=${city}`
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (city !== "" || null) {
      fetchWeather(city);
    } else {
      // show error
      console.log('this is the error ')
    }
  };
  const onChange = (e) => setCity(e.target.value);

  return (
    <>
      <FormWrapper>
        <FormTitle>Enter your city to get weather</FormTitle>
        <WeatherForm onSubmit={onSubmit}>
          <FormInput
            type="text"
            name="text"
            placeholder="get weather"
            value={city}
            onChange={onChange}
          />
          <SubmitBtn type="submit" value="submit" round="true" />
        </WeatherForm>
      </FormWrapper>
    </>
  );
};
export default Form;
