/* eslint-disable */
import React, { useContext } from 'react';
import {
  Formik, Form, useField, FieldAttributes,
} from 'formik';
import * as yup from 'yup';
import { WeatherSchema } from '../validations/WeatherValidation';
import Error from './Error';
import Loader from './Loader';
import WeatherContext from '../context/weatherContext';

const CustomInput: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div className="flex flex-col align-center max-w-lg w-full max-h-lg h-full">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-7 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-5 mb-5"
        id="username"
        {...field}
      />
      <p className="text-red text-center text-3xl">{errorText}</p>
    </div>
  );
};

export const FormScreen: React.FC<{}> = () => {
  const weatherContext = useContext(WeatherContext);
  const {
    loading, error, weather, searchWeather,
  } = weatherContext;
  return (
    <>
      <div className="px-8 flex flex-col align-center justify-center items-center	py-7">
        <div className="flex flex-col mx-0 max-w-xl w-full">
          <Formik
            initialValues={{ city: '' }}
            validationSchema={WeatherSchema}
            onSubmit={(data, { setSubmitting }) => {
              const { city } = data;
              searchWeather(city);
              setSubmitting(true);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors }) => (
              <>
                {error && <Error>{error}</Error>}
                {loading && <Loader />}
                <Form>
                  <CustomInput placeholder="city" name="city" type="input" />
                  <label className="block text-red-700 text-sm font-bold mb-2">
                    {errors.city ? 'Not a valid city' : ''}
                  </label>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5" type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                  {weather && (
                  <>
                    <ul className="flex flex-col bg-gray-300 p-4">
                      <li className="border-gray-400 flex flex-row mb-2">
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">🕗</div>
                          <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">Local Time</div>
                          </div>
                          <div className="text-gray-600 text-sm">
                            {weather.data.location.localtime}
                            {' '}
                          </div>
                        </div>
                      </li>
                      <li className="border-gray-400 flex flex-row mb-2">
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">💨</div>
                          <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">Wind MPH</div>
                          </div>
                          <div className="text-gray-600 text-xs">
                            {weather.data.current.wind_mph}
                            {' '}
                            MPH
                          </div>
                        </div>
                      </li>
                      <li className="border-gray-400 flex flex-row mb-2">
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">🌅</div>
                          <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">Humidity</div>
                          </div>
                          <div className="text-gray-600 text-xs">
                            {weather.data.current.humidity}
                            {' '}
                            %
                          </div>
                        </div>
                      </li>
                      <li className="border-gray-400 flex flex-row mb-2">
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">🌇</div>
                          <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">Current Temperature</div>
                          </div>
                          <div className="text-gray-600 text-xs">
                            {weather.data.current.temp_c}
                            {' '}
                            °C
                          </div>
                        </div>
                      </li>
                    </ul>
                  </>
                  )}
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
