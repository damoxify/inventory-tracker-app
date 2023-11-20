import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Signup() {
  const [customers, setCustomers] = useState([]);

  const formSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    address: yup.string().required('Address is required'),
    joinDate: yup.date().required('Join Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      joinDate: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      setCustomers([...customers, values]);

      console.log('Signup successful:', values);

      formik.resetForm();
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="bg-black p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl text-center mb-6 text-purple-700 font-bold">Sign up</h1>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">First Name</label>
          <input
            name="firstName"
            type="text"
            className="w-full p-2 border border-purple-400 rounded-md text-black focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-300"
            placeholder="Enter your first name..."
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p style={{ color: 'red' }}>{formik.errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">Last Name</label>
          <input
            name="lastName"
            type="text"
            className="w-full p-2 border border-purple-400 rounded-md text-black focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-300"
            placeholder="Enter your last name..."
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p style={{ color: 'red' }}>{formik.errors.lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">Address</label>
          <input
            name="address"
            type="text"
            className="w-full p-2 border border-purple-400 rounded-md text-black focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-300"
            placeholder="Enter your address..."
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <p style={{ color: 'red' }}>{formik.errors.address}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">Join Date</label>
          <input
            name="joinDate"
            type="date"
            className="w-full p-2 border border-purple-400 rounded-md text-black focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-300"
            value={formik.values.joinDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.birthDate && formik.errors.joinDate && (
            <p style={{ color: 'red' }}>{formik.errors.joinDate}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
