# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Dokumentasi Proyek

## Daftar Library yang Digunakan

Berikut adalah daftar library yang digunakan dalam proyek ini:

1. **React**  
   - Versi: `18.2.0`
   - Deskripsi: Library JavaScript untuk membangun antarmuka pengguna berbasis komponen.
   - Instalasi:  
     ```bash
     npm install react
     ```

2. **React Router DOM**  
   - Versi: `6.4.3`
   - Deskripsi: Digunakan untuk menangani routing di aplikasi React.
   - Instalasi:  
     ```bash
     npm install react-router-dom
     ```

3. **Axios**  
   - Versi: `1.5.0`
   - Deskripsi: Digunakan untuk melakukan HTTP requests, seperti `GET` dan `POST` data dari dan ke API.
   - Instalasi:  
     ```bash
     npm install axios
     ```

4. **Tailwind CSS**  
   - Versi: `3.3.2`
   - Deskripsi: Utility-first CSS framework yang digunakan untuk styling komponen.
   - Instalasi:  
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```

5. **React Icons**  
   - Versi: `4.8.0`
   - Deskripsi: Library untuk menambahkan ikon ke dalam aplikasi React.
   - Instalasi:  
     ```bash
     npm install react-icons
     ```

## Daftar Fitur Tambahan yang Dibuat

Berikut adalah fitur tambahan yang dibuat dalam proyek ini:

### 1. **Navbar dengan Autentikasi**
   - Fitur ini mencakup komponen `Navbar` yang dinamis berdasarkan status login pengguna. Navbar akan menampilkan tautan seperti `Home`, `Login`, dan `Register`, serta tombol `Logout` jika pengguna sudah login.
   - Token autentikasi disimpan di `localStorage` dan digunakan untuk menentukan tampilan menu.

### 2. **Protected Route**
   - Fitur ini memastikan bahwa pengguna yang belum login tidak dapat mengakses halaman yang dilindungi. 
   - Komponen `ProtectedRoute` akan memeriksa apakah ada token di `localStorage`. Jika tidak ada token, pengguna akan diarahkan ke halaman login.

### 3. **Halaman Home dengan Pagination**
   - Fitur ini menampilkan daftar pengguna yang diambil dari API menggunakan Axios. Data pengguna ditampilkan dalam bentuk grid, dan pengguna dapat menavigasi ke halaman berikutnya atau sebelumnya menggunakan kontrol pagination.
   - Jika terjadi kesalahan saat pengambilan data, pesan kesalahan akan ditampilkan.

### 4. **Halaman Login dan Registrasi**
   - Fitur login memungkinkan pengguna untuk masuk dengan menggunakan email dan password. Setelah berhasil login, token disimpan di `localStorage` dan pengguna diarahkan ke halaman utama.
   - Fitur registrasi memungkinkan pengguna untuk membuat akun baru. Setelah registrasi berhasil, pengguna akan diarahkan ke halaman login.

### 5. **Halaman Profil Pengguna**
   - Halaman profil ini akan menampilkan informasi pengguna yang sedang login, termasuk avatar, nama lengkap, dan email. Data pengguna diambil menggunakan token autentikasi dari API.

### 6. **Halaman Detail Pengguna**
   - Fitur ini menampilkan informasi detail pengguna berdasarkan ID yang diambil dari URL parameter.
   - Pengguna dapat mengakses halaman ini setelah login. Halaman ini menampilkan informasi pengguna yang lebih rinci, termasuk avatar dan email.

### 7. **Pengelolaan Token di LocalStorage**
   - Token autentikasi disimpan di `localStorage` setelah login dan digunakan untuk memverifikasi akses ke halaman yang dilindungi.
   - Token juga diperiksa setiap kali halaman dimuat untuk memutuskan apakah pengguna harus diarahkan ke halaman login atau ke halaman utama.

## Struktur Direktori

Berikut adalah struktur direktori dari proyek ini:


### Penjelasan:

1. **`/component/Navbar.js`**  
   Komponen untuk menampilkan menu navigasi di bagian atas aplikasi, termasuk login, register, dan tombol logout. Navbar ini juga mengelola status autentikasi pengguna.

2. **`/component/routes/ProtectedRoute.js`**  
   Komponen untuk melindungi halaman-halaman tertentu, hanya dapat diakses jika pengguna sudah login (token tersedia di `localStorage`).

3. **`/pages/Homepage.js`**  
   Halaman utama yang menampilkan daftar pengguna yang diambil dari API, dengan dukungan pagination. Pengguna dapat menavigasi halaman depan dan belakang.

4. **`/pages/Login.js`**  
   Halaman untuk login pengguna menggunakan email dan password. Setelah berhasil, token disimpan di `localStorage` untuk sesi berikutnya.

5. **`/pages/Register.js`**  
   Halaman untuk pengguna baru melakukan registrasi dengan memasukkan data seperti email, password, dan nama. Setelah berhasil, pengguna dapat langsung login.

6. **`/pages/ProfilePage.js`**  
   Halaman profil yang menampilkan informasi pengguna yang sedang login, seperti nama lengkap, email, dan avatar.

7. **`/pages/UserDetailPage.js`**  
   Halaman yang menampilkan informasi detail pengguna berdasarkan ID yang diambil dari URL. Ini memungkinkan pengguna untuk melihat data lebih rinci dari pengguna tertentu.

8. **`App.js`**  
   File utama yang mengatur routing dan pengelolaan aplikasi secara keseluruhan. Di sini semua halaman dan komponen utama dihubungkan menggunakan React Router.

9. **`index.js`**  
   Entry point dari aplikasi React yang menghubungkan aplikasi ke DOM. Di sini, React akan merender aplikasi ke dalam elemen dengan `id="root"` di HTML.


## Cara Menjalankan Aplikasi

1. **Clone repository**:
   ```bash
   git clone https://github.com/nonajuwita/MiniProject_2.git
