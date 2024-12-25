import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Make a POST request to the API
    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token) {
        setSuccess('Registrasi berhasil!');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after successful registration
        }, 1500);
      }
    } catch (err) {
      setError('Registrasi gagal. Pastikan email dan password valid.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-[#7E976B]">Register</h2>

        {/* Success Message */}
        {success && (
          <div className="p-4 mt-4 text-green-800 bg-green-100 rounded-md">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-4 mt-4 text-red-800 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-[#7E976B] focus:border-[#7E976B]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-[#7E976B] focus:border-[#7E976B]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-[#7E976B] text-white font-semibold rounded-md hover:bg-[#6c8a56] disabled:bg-gray-400"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-[#7E976B] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
