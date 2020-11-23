import React, { useState } from "react";
import {
  FormInput,
  FormTitle,
  WeatherForm,
  FormWrapper,
  SubmitBtn,
  ResWrapper,
} from "./FormElements";
import ResultCard from "../ResultCard/ResultCard";
const Form = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchWeather = async (city) => {
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    const result = (
      <ResultCard
        key={data.location.lat}
        location={data.location.region}
        icon={data.current.condition.icon}
        condition={data.current.condition.text}
        temp={data.current.temp_c}
        time={data.location.localtime}
        wind={data.current.wind_mph}
      />
    );
    setData(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (city !== "" || null) {
      fetchWeather(city);
    } else {
      // show error
      console.log("this is the error ");
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
      <ResWrapper>{data ? data : null}</ResWrapper>
    </>
  );
};
export default Form;
