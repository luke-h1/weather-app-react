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
import Loading from "../Loading/Loading";
import Error from "../Error/Error";


const Form = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      const API_URL = `https://weather-api-express-node.herokuapp.com/api/city/weather/${city}`;
      const res = await fetch(API_URL);
      const data = await res.json();
      const result = (
        <ResultCard
          key={data.data.location.lat}
          location={data.data.location.region}
          icon={data.data.current.condition.icon}
          condition={data.data.current.condition.text}
          temp={data.data.current.temp_c}
          time={data.data.location.localtime}
          wind={data.data.current.wind_mph}
        />
      );
      setData(result);
      setLoading(false);
    } catch (e) {
      console.log(e);
      showError("problem with API. Come back later :) ");
      setLoading(false);
    }
  };

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (city !== "" || null) {
      setLoading(true);
      fetchWeather(city);
    } else if (city === "" || null) {
      showError("Please enter all fields.");
      setLoading(false);
    } else {
      showError("Error with API");
      setLoading(false);
    }
  };

  const onChange = (e) => setCity(e.target.value);

  return (
    <>
      <FormWrapper>
        <FormTitle>Enter your city for weather information</FormTitle>
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
      <ResWrapper>
        {data ? data : "null"}
        {loading ? <Loading /> : null}
        {error ? <Error msg={error} /> : null}
      </ResWrapper>
    </>
  );
};

export default Form;
