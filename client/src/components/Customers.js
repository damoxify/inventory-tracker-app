import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = (url, setter) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setter(data);
          setError(null);
        })
        .catch(error => {
          setError('Error fetching data. Please try again.');
          console.error('Error fetching data:', error);
        });
    };

    fetchData('/customers', setCustomers);
    fetchData('/products', setProducts);
  }, []);

  // Validation schema using Yup
  const validationSchema = yup.object().shape({
    product_name: yup.string().required('Product name is required'),
    price: yup.string().required('Price is required'),
    description: yup.string().required('Description is required'),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      product_name: '',
      price: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your form submission logic here
      // e.g., API call to create a new product
      fetch('/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setProducts([...products, data]);
          formik.resetForm();
          setError(null);
        })
        .catch(error => {
          setError('Error creating product. Please try again.');
          console.error('Error creating product:', error);
        });
    },
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">List of customers</h2>
      {/* ... (existing code) */}

      <form onSubmit={formik.handleSubmit} className="mt-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">Add a new product to your Inventory</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            name="product_name"
            value={formik.values.product_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 ${formik.touched.product_name && formik.errors.product_name ? 'border-red-500' : ''}`}
            placeholder="Enter product name"
            required
          />
          {formik.touched.product_name && formik.errors.product_name && (
            <p className="text-red-500">{formik.errors.product_name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 ${formik.touched.price && formik.errors.price ? 'border-red-500' : ''}`}
            placeholder="Enter price"
            required
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500">{formik.errors.price}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
            placeholder="Enter product description"
            rows="3"
            required
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500">{formik.errors.description}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
        >
          Add product
        </button>
      </form>
    </div>
  );
}

export default Customers;

