import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';

const HomePage = () => {
  const [users, setUsers] = useState([]); // Untuk menyimpan data pengguna
  const [loading, setLoading] = useState(true); // Untuk menandakan loading
  const [error, setError] = useState(null); // Untuk menangani error
  const [currentPage, setCurrentPage] = useState(1); // Menyimpan halaman saat ini
  const [totalPages, setTotalPages] = useState(1); // Menyimpan total halaman

  // Mengambil data pengguna berdasarkan halaman
  useEffect(() => {
    setLoading(true); // Set loading true sebelum memuat data
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        setUsers(response.data.data); // Menyimpan data pengguna
        setTotalPages(response.data.total_pages); // Menyimpan total halaman
        setLoading(false); // Set loading ke false setelah data diambil
      })
      .catch((error) => {
        setError('Terjadi kesalahan saat mengambil data');
        setLoading(false);
      });
  }, [currentPage]); // Mengambil data setiap kali halaman berubah

  // Fungsi untuk berpindah ke halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fungsi untuk berpindah ke halaman sebelumnya
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-4 pt-24">
        <h1 className="text-3xl font-bold text-center text-[#7E976B]">Welcome to the Home Page!</h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Below is a list of users fetched from the API with pagination.
        </p>

        {/* Menampilkan loading jika data masih dimuat */}
        {loading && (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        )}

        {/* Menampilkan error jika ada */}
        {error && (
          <div className="mt-8 text-center">
            <p className="text-lg text-red-500">{error}</p>
          </div>
        )}

        {/* Daftar Pengguna */}
        {!loading && !error && (
          <div className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-md"
                >
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="object-cover w-24 h-24 rounded-full"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {user.first_name} {user.last_name}
                    </h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    {/* Button untuk menuju halaman detail user */}
                    <Link
                      to={`/user/${user.id}`}
                      className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevPage}
                className="px-4 py-2 bg-[#7E976B] text-white rounded-full hover:bg-[#6c8a56] disabled:bg-gray-400"
                disabled={currentPage === 1} // Disable prev button if on first page
              >
                Previous
              </button>
              <span className="text-lg font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                className="px-4 py-2 bg-[#7E976B] text-white rounded-full hover:bg-[#6c8a56] disabled:bg-gray-400"
                disabled={currentPage === totalPages} // Disable next button if on last page
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
