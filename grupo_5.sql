-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2022 a las 20:52:28
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo_5`
--
--
-- Base de datos: `grupo_5`
--
CREATE DATABASE IF NOT EXISTS `grupo_5` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `grupo_5`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cepas`
--

CREATE TABLE `cepas` (
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Descripción de la cepa',
  `cepa_id` int(10) NOT NULL COMMENT 'índice de la cepa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'nombre del producto',
  `precio` decimal(10,0) NOT NULL COMMENT 'precio del producto',
  `cepa_id` int(10) NOT NULL COMMENT 'cepa del viñedo',
  `categoria` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'categoría del producto',
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Descripción del producto',
  `imagen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de la imagen',
  `produc_id` int(10) NOT NULL COMMENT 'índice de productos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de productos';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(5) NOT NULL,
  `nombres` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de usuario',
  `apellidos` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Apellidos de usuario',
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'email de registro',
  `fechaNac` date NOT NULL COMMENT 'Fecha de Nacimiento',
  `telefono` int(11) NOT NULL COMMENT 'teléfono',
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Clave de usuario',
  `categoria` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Imagen del usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cepas`
--
ALTER TABLE `cepas`
  ADD PRIMARY KEY (`cepa_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`produc_id`),
  ADD KEY `cepa_id` (`cepa_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
