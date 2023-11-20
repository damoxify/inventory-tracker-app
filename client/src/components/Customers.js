import React, { useState, useEffect } from 'react';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('/customers')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setCustomers(data);
          setError(null);
        })
        .catch(error => {
          setError('Error fetching data. Please try again.');
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      fetch('/products')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setProducts(data);
          setError(null);
        })
        .catch(error => {
          setError('Error fetching data. Please try again.');
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);

  const createProduct = (e) => {
    e.preventDefault();

    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProducts([...products, data]);
        setNewProduct({
          product_name: '',
          price: '',
          description: '',
        });
        setError(null);
      })
      .catch(error => {
        setError('Error creating product. Please try again.');
        console.error('Error creating product:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">List of customers</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">customer Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Join date</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{customer.customer_name}</td>
              <td className="py-2 px-4 border-b">{customer.address}</td>
              <td className="py-2 px-4 border-b">{customer.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={createProduct} className="mt-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">Add a new product to your Inventory</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">product Name</label>
          <input
            type="text"
            name="product_name"
            value={newProduct.product_name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">price</label>
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">description</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
            placeholder="Enter product description"
            rows="3"
            required
          ></textarea>
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
