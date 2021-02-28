import React, { useContext } from 'react';
import { Formik, Form, useField, FieldAttributes } from 'formik';
import Image from 'next/image';
import * as yup from 'yup';
import {
  Box,
  Flex,
  Heading,
  FormLabel,
  Input,
  Text,
  Badge,
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
            searchWeather(city);
            setSubmitting(true);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, errors }) => (
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
                      <Box
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                      >
                        <Box p="6">
                          <Box d="flex" alignItems="baseline">
                            <Badge
                              borderRadius="full"
                              px="2"
                              colorScheme="teal"
                            ></Badge>
                            <Box
                              color="#000"
                              fontWeight="semibold"
                              letterSpacing="wide"
                              fontSize="xs"
                              textTransform="uppercase"
                              ml="2"
                            >
                              <Text color="#000">
                                LocalTime: {weather.data.location.localtime}
                              </Text>
                            </Box>
                          </Box>

                          <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            color="#000"
                          >
                            <Text color="#000">
                              Wind MPH:{weather.data.current.wind_mph}
                            </Text>
                          </Box>

                          <Box>
                            <Box as="span" color="#000" fontSize="sm">
                              <Text color="#000">
                                Humidity: {weather.data.current.humidity}%
                              </Text>
                              <Text color="#000">
                                Temp: {weather.data.current.temp_c} degrees
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  )}
                </Flex>
                <Text color="#000"></Text>
              </Form>
            </>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default RegisterScreen;
