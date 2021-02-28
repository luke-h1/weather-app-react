import React, { useContext } from 'react';
import {
  Formik, Form, useField, FieldAttributes,
} from 'formik';
import * as yup from 'yup';
import {
  UnorderedList,
  ListItem,
  Flex,
  FormLabel,
  List,
  Input,
  Text,
} from '@chakra-ui/react';
import { Button } from './Button';
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
    <>
      <FormLabel>{placeholder}</FormLabel>
      <Input
        {...field}
        placeholder={placeholder}
        error={!!errorText}
        FormErrorMessage={errorText}
        py={6}
        mb={6}
      />
    </>
  );
};
const RegisterScreen: React.FC = () => {
  const weatherContext = useContext(WeatherContext);
  const {
    loading, error, weather, searchWeather,
  } = weatherContext;

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        minH={50}
        mb={10}
      />
      <Flex
        direction="column"
        justify="center"
        align="center"
        mx="auto"
        maxW="660px"
      >
        <Formik
          initialValues={{
            city: '',
          }}
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
              <Form>
                <CustomInput
                  placeholder="city"
                  name="city"
                  type="input"
                  as={Input}
                />

                <FormLabel as="p" color="red">
                  {' '}
                  {errors.city ? 'Not a valid city' : ''}
                </FormLabel>

                <Button as="button" disabled={isSubmitting} type="submit">
                  Login
                </Button>
                <Flex direction="column" align="center">
                  {error && <Error>{error}</Error>}
                  {loading && <Loader />}
                  {weather && (
                    <>
                      <Flex direction="column" align="center" justify="center" mt={20}>
                        <List spacing={10}>
                          <ListItem>
                            {' '}
                            LocalTime:
                            {' '}
                            {weather.data.location.localtime}
                          </ListItem>
                          <ListItem>
                            {' '}
                            Wind:
                            {weather.data.current.wind_mph}
                            {' '}
                            MPH
                          </ListItem>
                          <ListItem>
                            {' '}
                            Humidity:
                            {' '}
                            {weather.data.current.humidity}
                            %
                          </ListItem>
                          <ListItem>
                            {' '}
                            Temp:
                            {' '}
                            {weather.data.current.temp_c}
                            {' '}
                            degrees
                          </ListItem>
                        </List>
                      </Flex>
                    </>
                  )}
                </Flex>
                <Text color="#000" />
              </Form>
            </>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default RegisterScreen;
