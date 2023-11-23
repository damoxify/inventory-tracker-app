import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Login() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log('Login successful:', values);
      navigate('/products');
    },
  });

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form onSubmit={formik.handleSubmit} className='bg-black p-8 rounded-md shadow-md max-w-md w-full'>
        <h1 className="text-4xl mb-6 text-center text-purple-700 font-bold">Sign in</h1>
        <div className='mb-4'>
          <label className='block text-sm text-white mb-2'>Username</label>
          <input
            name="username"
            className={`w-full p-2 border border-purple-400 rounded-md text-black focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-300 ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
            placeholder='Enter your username...'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p style={{ color: 'red' }}>{formik.errors.username}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block text-sm text-white mb-2'>Password</label>
          <input
            name="password"
            className={`w-full p-2 border border-purple-400 rounded-md text-black focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-300 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
            placeholder='Enter your password...'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: 'red' }}>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <button
            className='w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500'
            type='submit'
          >
            Sign in
          </button>
        </div>
        <div className='mt-4 text-center text-white'>
          Not a customer? <Link to='/' className='text-purple-700 font-bold'>Sign up here</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
