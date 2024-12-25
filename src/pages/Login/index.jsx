import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('https://reqres.in/api/login', form);
      
      console.log(res);

      // Save the access token to localStorage after successful login
      localStorage.setItem('access_token', res.data.token); // Save token to localStorage

      setSuccess("Login Successful");

      setTimeout(() => {
        navigate('/'); // Redirect to homepage after successful login
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      {/* Left Section */}
      <div className="w-full mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#7E976B] mb-6">
          Welcome to Our Site! 
        </h1>
        <p className="text-lg text-[#282828] mb-6">
          Join the community by logging into your account. Let’s get started!
        </p>
      </div>

      {/* Form Login */}
      <div className="bg-white border-4 border-[#7E976B] shadow-lg rounded-xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#7E976B] text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-base font-bold text-[#7E976B] mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-4 border-[#7E976B] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#88A672]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-base font-bold text-[#7E976B] mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border-4 border-[#7E976B] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#88A672]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-sm text-center text-red-500">{error}</div>}

          {/* Success Message */}
          {success && <div className="text-sm text-center text-green-500">{success}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-[#88A672]'} text-white font-bold text-base border-4 border-[#7E976B] shadow-lg hover:bg-[#6c8a56]`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Sign-up Link */}
        <div className="mt-4 text-center">
          <p className="text-[#282828] text-sm">Don't have an account? <a href="/register" className="text-[#C0AFE2] font-bold underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
