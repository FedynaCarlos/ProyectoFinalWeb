-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2022 a las 21:37:08
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

--
-- Volcado de datos para la tabla `cepas`
--

INSERT INTO `cepas` (`descripcion`, `cepa_id`) VALUES
('Syrah', 1),
('Merlot', 2),
('Carmenere', 3),
('Malbec', 4),
('Cabernet Savignon', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `perfil_id` int(10) NOT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`perfil_id`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Invitado');

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
  `produc_id` int(10) UNSIGNED NOT NULL COMMENT 'índice de productos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de productos';

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`nombre`, `precio`, `cepa_id`, `categoria`, `descripcion`, `imagen`, `produc_id`) VALUES
('Espumante', '4600', 1, 'Espumoso', 'Para Festejar', 'clogoespumante.jpg', 1),
('Judas', '6000', 4, 'Tinto', 'Excelente para cualquier tipo de comida', 'Judas_Malbec.jpg', 2),
('Junior Blend', '5500', 4, 'Tinto', 'Vino con excelentes aromas', 'Junior_Blend.jpg', 3),
('Hola', '1000', 3, 'Blanco', 'Hola de nuevo', 'Vino-1650247097307.jpg', 4);

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
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Imagen del usuario',
  `perfil_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombres`, `apellidos`, `email`, `fechaNac`, `telefono`, `password`, `avatar`, `perfil_id`) VALUES
(1, 'DANIEL', 'MODARELLI', 'modarellid@net.ar', '1965-06-23', 155693888, '$2a$10$e5o93yKilUWSOhWvl0R5y.Y4NoXZig.YD7HB4vdkN.tdx2ctyk0.2', 'imagen3.jpg', 1),
(4, 'EVA ELIZABETH', 'LOPEZ', 'escribanaevalopez@gmail.com', '1963-09-08', 2147483647, '$2a$10$GknLJ8fD9lXR7gVd.DrExOD5o/7gkCKCqjLqHR6ffM/vLI85ZC9PG', 'avatar-1652047069049.jpg', 2),
(5, 'EVA ELIZABETH', 'LOPEZ', 'evalopez@gmail.com', '1965-06-23', 2147483647, '$2a$10$9pnubUob45UqyhTHJ5Z/SekFx0KC3YdncGV/pg3RGX/ysXe06hkVi', 'avatar-1652047572727.jpg', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cepas`
--
ALTER TABLE `cepas`
  ADD PRIMARY KEY (`cepa_id`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`perfil_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `perfil_id` (`perfil_id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `produc_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'índice de productos', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `cepas_producto` FOREIGN KEY (`cepa_id`) REFERENCES `cepas` (`cepa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `perfil_usuario` FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`perfil_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
