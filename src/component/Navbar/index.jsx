import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token'); // Ambil token dari localStorage

  // Fungsi untuk handle logout
  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove the token from localStorage
    setTimeout(() => {
      navigate("/login"); // Redirect to login page after logout
    }, 1000);
  };
  

  // Untuk toggle menu pada tampilan mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle visibility menu mobile
  };

  return (
    <nav className="bg-[#7E976B] p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo atau Judul Navbar */}
        <h1 className="text-3xl font-extrabold text-white">Dashboard</h1>

        {/* Menu Navbar untuk Desktop */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/"
            className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full"
          >
            Home
          </Link>

          {/* Conditional Rendering untuk Login/Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full"
            >
              Login
            </Link>
          )}

          {/* Tautan Register hanya jika tidak ada token */}
          {!token && (
            <Link
              to="/register"
              className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full"
            >
              Register
            </Link>
          )}
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-white">
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#7E976B] mt-4 space-y-4 px-4 py-2">
          <Link
            to="/"
            className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full block"
          >
            Home
          </Link>

          {/* Conditional Rendering untuk Login/Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full block"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full block"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-lg font-bold text-white hover:bg-[#6c8a56] px-4 py-2 rounded-full block"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
