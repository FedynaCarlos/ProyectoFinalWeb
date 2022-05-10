-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2022 at 05:59 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grupo_5`
--
CREATE DATABASE IF NOT EXISTS `grupo_5` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `grupo_5`;

-- --------------------------------------------------------

--
-- Table structure for table `cepas`
--

CREATE TABLE `cepas` (
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Descripción de la cepa',
  `cepa_id` int(10) NOT NULL COMMENT 'índice de la cepa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cepas`
--

INSERT INTO `cepas` (`descripcion`, `cepa_id`) VALUES
('Syrah', 1),
('Merlot', 2),
('Carmenere', 3),
('Malbec', 4),
('Cabernet Savignon', 5);

-- --------------------------------------------------------

--
-- Table structure for table `perfil`
--

CREATE TABLE `perfil` (
  `perfil_id` int(10) NOT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perfil`
--

INSERT INTO `perfil` (`perfil_id`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Invitado');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'nombre del producto',
  `precio` decimal(10,0) NOT NULL COMMENT 'precio del producto',
  `cepa_id` int(10) NOT NULL COMMENT 'cepa del viñedo',
  `categoria` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'categoría del producto',
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Descripción del producto',
  `imagen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de la imagen',
  `produc_id` int(10) UNSIGNED NOT NULL COMMENT 'índice de productos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de productos';

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`nombre`, `precio`, `cepa_id`, `categoria`, `descripcion`, `imagen`, `produc_id`) VALUES
('Judas', '6000', 4, 'Tinto', 'Excelente para cualquier tipo de comida', 'Judas_Malbec.jpg', 2),
('Junior Blend', '5500', 4, 'Tinto', 'Vino con excelentes aromas', 'Junior_Blend.jpg', 3),
('Hola', '1000', 3, 'Blanco', 'Hola de nuevo', 'Vino-1650247097307.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(5) NOT NULL,
  `nombres` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de usuario',
  `apellidos` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Apellidos de usuario',
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'email de registro',
  `fechaNac` date NOT NULL COMMENT 'Fecha de Nacimiento',
  `telefono` int(11) NOT NULL COMMENT 'teléfono',
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Clave de usuario',
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Imagen del usuario',
  `perfil_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nombres`, `apellidos`, `email`, `fechaNac`, `telefono`, `password`, `avatar`, `perfil_id`) VALUES
(1, 'DANIEL', 'MODARELLI', 'modarellid@net.ar', '1965-06-23', 155693888, '$2a$10$e5o93yKilUWSOhWvl0R5y.Y4NoXZig.YD7HB4vdkN.tdx2ctyk0.2', 'imagen3.jpg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cepas`
--
ALTER TABLE `cepas`
  ADD PRIMARY KEY (`cepa_id`);

--
-- Indexes for table `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`perfil_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`produc_id`),
  ADD KEY `cepa_id` (`cepa_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `perfil_id` (`perfil_id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `produc_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'índice de productos', AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `cepas_producto` FOREIGN KEY (`cepa_id`) REFERENCES `cepas` (`cepa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `perfil_usuario` FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`perfil_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
