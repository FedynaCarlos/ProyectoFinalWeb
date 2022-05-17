-- MySQL dump 10.13  Distrib 5.7.36, for Win64 (x86_64)
--
-- Host: localhost    Database: grupo_5
-- ------------------------------------------------------
-- Server version	5.7.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Database: `grupo_5`
--
CREATE DATABASE IF NOT EXISTS `grupo_5` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `grupo_5`;

--
-- Table structure for table `cepas`
--

DROP TABLE IF EXISTS `cepas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cepas` (
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Descripción de la cepa',
  `cepa_id` int(10) NOT NULL COMMENT 'índice de la cepa',
  PRIMARY KEY (`cepa_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cepas`
--

LOCK TABLES `cepas` WRITE;
/*!40000 ALTER TABLE `cepas` DISABLE KEYS */;
INSERT INTO `cepas` VALUES ('Syrah',1),('Merlot',2),('Carmenere',3),('Malbec',4),('Cabernet Savignon',5),('Shardonnay',6),('Petit Verdot',7),('Torrontés',8),('Tempranillo',9),('Moscatel',10),('Bonarda',11),('Garnacha',12),('Monastrell',13),('Airén',14),('Pedro Ximenez',15),('Albariño',16);
/*!40000 ALTER TABLE `cepas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfil` (
  `perfil_id` int(10) NOT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`perfil_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` VALUES (1,'Administrador'),(2,'Invitado');
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'nombre del producto',
  `precio` decimal(10,0) NOT NULL COMMENT 'precio del producto',
  `cepa_id` int(10) NOT NULL COMMENT 'cepa del viñedo',
  `categoria` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'categoría del producto',
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Descripción del producto',
  `imagen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de la imagen',
  `produc_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'índice de productos',
  PRIMARY KEY (`produc_id`),
  KEY `cepa_id` (`cepa_id`),
  CONSTRAINT `cepas_producto` FOREIGN KEY (`cepa_id`) REFERENCES `cepas` (`cepa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de productos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES ('Espumante',4600,1,'Espumoso','Para Festejar en familia','clogoespumante.jpg',1),('Judas',6000,4,'Tinto','Excelente para cualquier tipo de comida','Judas_Malbec.jpg',2),('Junior Blend',5500,4,'Tinto','Vino con excelentes aromas y sabores','Junior_Blend.jpg',3),('La consulta',5000,1,'Espumoso','Excelente para compartir en familia','Vino-1652286935010.jpg',5),('Reserva de Familia',50000,4,'Tinto','Espacial para acompañar carnes rojas','Vino-1652296444395.jpg',6),('Santa Rita',100000,4,'Rosado','Acompaña muy bien tu cena romantica','Vino-1652296667806.jpg',7),('Maria Magdalena',10000,3,'Espumoso','Para compartir en familia','Vino-1652296938043.jpg',8),('Gran Opalo',6000,7,'Tinto','Cosecha 2019 dos años en barril','Vino-1652753772414.jpg',15),('Los altepes',3200,1,'Espumante','Cosecha 2018 de los viñedos de Tupungato','Vino-1652753993178.jpg',16);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de usuario',
  `apellidos` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Apellidos de usuario',
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'email de registro',
  `fechaNac` date NOT NULL COMMENT 'Fecha de Nacimiento',
  `telefono` int(11) NOT NULL COMMENT 'teléfono',
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Clave de usuario',
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Imagen del usuario',
  `perfil_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `perfil_id` (`perfil_id`) USING BTREE,
  CONSTRAINT `perfil_usuario` FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`perfil_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'DANIEL','MODARELLI','modarellidaniel@gmail.com','1965-06-23',155693888,'$2a$10$e5o93yKilUWSOhWvl0R5y.Y4NoXZig.YD7HB4vdkN.tdx2ctyk0.2','imagen3.jpg',1),(5,'EVA ELIZABETH','LOPEZ','evalopez@gmail.com','1965-06-23',2147483647,'$2a$10$9pnubUob45UqyhTHJ5Z/SekFx0KC3YdncGV/pg3RGX/ysXe06hkVi','avatar-1652047572727.jpg',2),(7,'Felipe','Carta','juanfelidc@yahoo.com','1970-10-10',1234,'$2a$10$PzGGcwdllW815jRqY2GuIO6.oqK3JFs8sdo2rzAmfwfx.CvXYInum','avatar-1652645846175.jpeg',1),(8,'Juan Carlos ','Fedyna','jfedyna@outlook.com','1985-04-30',1532712055,'$2a$10$rwCxJ7p/n0Mz4p0m0vXcIuwtjRscCCSSqLU6qxImw/tA5GV9u5hyO','avatar-1652754214253.jpg',1),(9,'Harbey','Mayorga','harbey287@gmail.com','1990-09-06',321456251,'$2a$10$jB3tuwsFJtAnWlAXY9gmo.RT8..zdPvabHqvniIMTd52xfXiSGbgG','avatar-1652754321428.jpg',1),(10,'Andres','Murgo','murgoandres@gmail.com','2000-10-10',523614528,'$2a$10$2VKnc2b3vyY8Iyvw7d.FWeaAKR3O3KeOxpVOljejRp0SgNOV/ysyG','avatar-1652754474073.jpg',2),(11,'Fernando','Leiva','fernandoleiva@gmail.com','2000-10-15',562319549,'$2a$10$siwy6LUMa.bbxCogkGb4ruABV7NOHzR9kqUPDGYfMg.MP3U2j726K','avatar-1652754570032.jpg',2);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo_5'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-16 21:44:52
