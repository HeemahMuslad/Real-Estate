// "use client"
// import { Flex, useMediaQuery } from '@chakra-ui/react';

// import SideImage from '../components/SideImage';
// import SigninForm from '../components/SigninForm';
// import AuthLayout from '../layout';

// const index = () => {
//   const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

//   return (
//     <Flex height="100vh" width="100%" align="center">
//       {isLargerThan700 && <SideImage />}
//       <SigninForm />
//     </Flex>
//   );
// };

// export default index;
import { AuthForm } from '../components/AuthForm';
import { signInSchema } from '../components/Schemas';

const SignInPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: any, actions: any) => {
    console.log('Sign In Form Data:', values);
    actions.setSubmitting(false);
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <AuthForm
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
      fields={fields}
    />
  );
};

export default SignInPage;
