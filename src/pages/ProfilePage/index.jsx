import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna
  const [loading, setLoading] = useState(true); // Menandakan apakah data masih dimuat
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token"); // Cek token di localStorage

    if (!token) {
      navigate("/login"); // Jika tidak ada token, redirect ke halaman login
      return;
    }

    // Jika ada token, ambil data pengguna
    axios
      .get("https://reqres.in/api/users/2", {
        headers: {
          Authorization: `Bearer ${token}`, // Kirim token untuk otentikasi
        },
      })
      .then((response) => {
        setUserData(response.data.data); // Simpan data pengguna
        setLoading(false); // Selesai memuat data
      })
      .catch((error) => {
        console.error("Error fetching profile data", error);
        setLoading(false);
      });
  }, [navigate]);

  // Jika sedang memuat data
  if (loading) {
    return <p>Loading profile...</p>;
  }

  // Jika data pengguna ditemukan
  if (userData) {
    return (
      <div className="profile-page">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="mt-8 profile-info">
          <img
            src={userData.avatar}
            alt={userData.first_name}
            className="object-cover w-24 h-24 rounded-full"
          />
          <div className="mt-4 profile-details">
            <p className="text-lg font-semibold">{userData.first_name} {userData.last_name}</p>
            <p className="text-sm text-gray-500">{userData.email}</p>
          </div>
        </div>
      </div>
    );
  }

  return <p>Unable to load profile data</p>; // Jika tidak ada data pengguna
};

export default ProfilePage;
