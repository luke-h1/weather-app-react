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

const WeatherState = (props) => {
  const initialState = {
    loading: false,
    city: null,
    weather: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const searchWeather = async (city) => {
    try {
      setLoading();
      const { data } = await axios.get(
        `http://localhost:5000/api/weather/${city}`
      );

      dispatch({
        type: SEARCH_WEATHER,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: WEATHER_ERROR,
      });
    }
  };
};
