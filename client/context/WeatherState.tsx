import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import {
  SEARCH_WEATHER,
  SET_LOADING,
  WEATHER_ERROR,
} from './constants/WeatherConstants';
import weatherReducer from './weatherReducer';

const API_URL = process.env.NODE_ENV === 'production' ? 'https://weather-api-node-exp.herokuapp.com' : 'http://localhost:5000'


const WeatherState = ({ children }) => {
  const initialState = {
    loading: false,
    weather: null,
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const setLoading = () => dispatch({ type: SET_LOADING });

  const searchWeather = async (city) => {
    try {
      setLoading();
      const res = await axios.get(
        `${API_URL}/api/weather/${city}`
      );

      dispatch({
        type: SEARCH_WEATHER,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: WEATHER_ERROR,
      });
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        loading: state.loading,
        searchWeather,
        setLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
