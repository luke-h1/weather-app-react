import React, { useEffect } from 'react';
import { Formik, Form, useField, FieldAttributes } from 'formik';
import * as yup from 'yup';
import { Box, Flex, Heading, FormLabel, Input } from '@chakra-ui/react';
import { Button } from './Button';
import { WeatherSchema } from '../validations/WeatherValidation';
import Error from './Error';
import Loader from './Loader';

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
  const router = useRouter();
  const userRegister = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      router.push('/dashboard');
    }
  }, [router, userInfo]);

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
            email: '',
            password: '',
          }}
          validationSchema={WeatherSchema}
          onSubmit={(data, { setSubmitting }) => {
            const { email, password } = data;
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
                  placeholder="email"
                  name="email"
                  type="input"
                  as={Input}
                />
                <CustomInput
                  placeholder="password"
                  name="password"
                  type="input"
                  as={Input}
                />

                <FormLabel as="p" color="red">
                  {' '}
                  {errors.email || errors.password
                    ? 'Invalid credentials!'
                    : ''}
                </FormLabel>

                <Button as="button" disabled={isSubmitting} type="submit">
                  Login
                </Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </Form>
            </>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default RegisterScreen;
