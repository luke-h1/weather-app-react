import React, { useState } from 'react';
import {
  FormInput,
  FormTitle,
  WeatherForm,
  FormWrapper,
  SubmitBtn,
  ResWrapper,
} from './FormElements';
import ResultCard from '../ResultCard/ResultCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const Form = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      const API_URL = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`;
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
      setLoading(false);
    } catch (e) {
      console.log(e);
      showError();
    }
  };

  const showError = () => setError(true);
  setTimeout(() => {
    setError(false);
  }, 2000);

  const onSubmit = (e) => {
    e.preventDefault();
    if (city !== '' || null) {
      setLoading(true);
      fetchWeather(city);
    } else if (city === '' || null) {
      setError('hello');
    } else {
      showError();
    }
  };

  const onChange = (e) => setCity(e.target.value);

  return (
    <>
      <FormWrapper>
        <FormTitle>Enter your city to get weather</FormTitle>
        <WeatherForm onSubmit={onSubmit}>
          <FormInput
            type='text'
            name='text'
            placeholder='get weather'
            value={city}
            onChange={onChange}
          />
          <SubmitBtn type='submit' value='submit' round='true' />
        </WeatherForm>
      </FormWrapper>
      <ResWrapper>
        {data ? data : null}
        {loading ? <Loading /> : null}
        {error ? <Error msg={error} /> : null}
      </ResWrapper>
    </>
  );
};

export default Form;
