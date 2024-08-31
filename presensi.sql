-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Agu 2024 pada 16.29
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `presensi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `riwayat`
--

CREATE TABLE `riwayat` (
  `id_riwayat` int(50) NOT NULL,
  `id_user` varchar(50) NOT NULL,
  `jns_presensi` varchar(50) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `riwayat`
--

INSERT INTO `riwayat` (`id_riwayat`, `id_user`, `jns_presensi`, `keterangan`, `created_at`) VALUES
(2, '1301203054', 'Presensi', '-', '2024-08-26 04:47:46'),
(3, '1301203054', 'Presensi', '-', '2024-08-26 05:15:14'),
(4, '1301223053', 'Absen', 'sakit', '2024-08-27 02:55:04'),
(5, '1301233333', 'Absen', 'sakit', '2024-08-27 14:03:00'),
(6, '1301233333', 'Presen', '-', '2024-08-27 14:07:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `jabatan` varchar(50) NOT NULL,
  `nm_lengkap` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `jabatan`, `nm_lengkap`, `role`) VALUES
('1301203054', 'fahmi', '$2a$10$42BrbmTCpdYH1BjdTIcGVOmuDI17QPBT8TRU1G4qynS/7W3Quj4QO', 'ManagerIT', 'FahmiMF', 'karyawan'),
('1301213053', 'aldi', '$2a$10$FVGHwLpzjxPNvyWWQKhBMuIlvLMyvVUQi8ZLj/nk56jHULlL0wrxm', 'programmer', 'AldiM.Farhan', 'karyawan'),
('1301213054', 'ArhanF', '$2a$10$ad1MEuytL7qleQUDRKHaoeTqIXNLbTtUYvb53xT5Rxw6gp9/OnHqW', 'programmer', 'ArhanFaturrahman', 'karyawan'),
('1301223053', 'ridwan', '$2a$10$jJNJuPaRv.GUpmldi47JYOp644CAH7LN6J8P2T1mZF4WGHm7vJFwW', 'ManagerAkuntan', 'RidwanSetiawanBudi', 'karyawan'),
('1301233333', 'rafidun', '$2a$10$VFdOEmpQYrctKjT/qMMO1OxQc9YnCCG1D/ulT/8lH0Aufqm5TfJGq', 'OB', 'Rafi Akbar Fauzi', 'karyawan');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `riwayat`
--
ALTER TABLE `riwayat`
  ADD PRIMARY KEY (`id_riwayat`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `riwayat`
--
ALTER TABLE `riwayat`
  MODIFY `id_riwayat` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `riwayat`
--
ALTER TABLE `riwayat`
  ADD CONSTRAINT `riwayat_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
