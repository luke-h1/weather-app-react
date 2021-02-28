import React, { useContext } from 'react';
import { Formik, Form, useField, FieldAttributes } from 'formik';
import * as yup from 'yup';
import { Box, Flex, Heading, FormLabel, Input, Text } from '@chakra-ui/react';
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
        mb={6}
      />
    </>
  );
};
const RegisterScreen: React.FC = () => {
  const weatherContext = useContext(WeatherContext);
  const { loading, error, weather, searchWeather } = weatherContext;

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        minH={50}
        mb={10}
      >
        <Box>
          <Heading as="h1" fontSize="40px" mb={4}>
            Login
          </Heading>
        </Box>
      </Flex>
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
            searchWeather(city)
            setSubmitting(true);
            // make async call to get weather here
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, errors }) => (
            <>
              <Form>
                {error && <Error>{error}</Error>}
                {loading && <Loader />}

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
                <Text color='#000'>{weather && weather.data.location.name}</Text>
              </Form>
            </>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default RegisterScreen;
