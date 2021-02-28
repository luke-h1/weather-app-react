import * as yup from 'yup';

export const WeatherSchema = yup.object().shape({
  city: yup.string().min(3).max(20).required(),
});