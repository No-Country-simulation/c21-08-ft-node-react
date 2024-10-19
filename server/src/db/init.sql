-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 15-10-2024 a las 04:44:37
-- Versión del servidor: 5.7.44
-- Versión de PHP: 8.2.8
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = '+00:00';

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

--
-- Base de datos: `kramer`
--
CREATE DATABASE IF NOT EXISTS kramer;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `category`
--
CREATE TABLE `category` (
  `categoryId` varchar(255) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `featured` BOOLEAN DEFAULT false
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Volcado de datos para la tabla `category`
--
INSERT INTO
  `category` (`categoryId`, `categoryName`, `featured`)
VALUES
  ('1', 'Almacén', true),
  ('2', 'Congelados', false),
  ('3', 'Librería', false),
  ('4', 'Vinoteca', true),
  ('5', 'Limpieza', false),
  ('6', 'Bebidas sin alcohol', true),
  ('7', 'Bebidas con alcohol', true),
  ('8', 'Variados', false);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `client_order`
--
CREATE TABLE `client_order` (
  `clientOrderId` varchar(255) NOT NULL,
  `status` enum('process', 'done') NOT NULL DEFAULT 'process',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` varchar(36) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `facturation`
--
CREATE TABLE `facturation` (
  `facturationId` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `user` varchar(36) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `favorite`
--
CREATE TABLE `favorite` (
  `product` varchar(36) NOT NULL,
  `user` varchar(36) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `order_product`
--
CREATE TABLE `order_product` (
  `orderProductId` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `clientOrder` varchar(36) DEFAULT NULL,
  `product` varchar(36) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `payment`
--
CREATE TABLE `payment` (
  `paymentId` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` enum('process', 'done', 'rejected') NOT NULL DEFAULT 'process',
  `clientOrder` varchar(36) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `product`
--
CREATE TABLE `product` (
  `productId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `unitOfMeasurement` enum('kg', 'gr', 'lt', 'ml', 'unitary') NOT NULL DEFAULT 'unitary',
  `description` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `category` varchar(36) DEFAULT NULL,
  `promotion` varchar(36) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Volcado de datos para la tabla `product`
--
INSERT INTO
  `product` (
    `productId`,
    `name`,
    `price`,
    `unitOfMeasurement`,
    `description`,
    `stock`,
    `imgUrl`,
    `category`,
    `promotion`,
    `brand`
  )
VALUES
  (
    '10VinoID',
    'Vino tinto reserva',
    2299.99,
    'unitary',
    'Vino tinto reserva, con 12 meses de crianza',
    14,
    'https://example.com/vino-tinto-reserva.jpg',
    '4',
    '1',
    'arcor'
  ),
  (
    '11ChampagneID',
    'Champagne brut',
    3449.75,
    'unitary',
    'Champagne brut, ideal para ocasiones especiales',
    30,
    'https://example.com/champagne-brut.jpg',
    '4',
    NULL,
    'arcor'
  ),
  (
    '12LicorID',
    'Licor de café',
    1900,
    'lt',
    'Delicioso licor de café con notas a vainilla',
    50,
    'https://example.com/licor-cafe.jpg',
    '4',
    '3',
    'arcor'
  ),
  (
    '13DetergenteID',
    'Detergente en polvo',
    1500,
    'kg',
    'Detergente en polvo de alta eficacia',
    100,
    'https://example.com/detergente-polvo.jpg',
    '5',
    NULL,
    'arcor'
  ),
  (
    '14SuavizanteID',
    'Suavizante de ropa',
    2400,
    'lt',
    'Suavizante de ropa concentrado, aroma a flores',
    80,
    'https://example.com/suavizante-ropa.jpg',
    '5',
    '2',
    'arcor'
  ),
  (
    '15LavavajillasID',
    'Lavavajillas líquido',
    3300,
    'lt',
    'Lavavajillas líquido de enjuague rápido',
    90,
    'https://example.com/lavavajillas-liquido.jpg',
    '5',
    NULL,
    'quilmes'
  ),
  (
    '16AguaID',
    'Agua mineral',
    900,
    'lt',
    'Agua mineral natural, sin gas',
    120,
    'https://example.com/agua-mineral.jpg',
    '6',
    '1',
    'quilmes'
  ),
  (
    '17JugoID',
    'Jugo de naranja',
    750,
    'lt',
    'Jugo de naranja exprimido, sin azúcar',
    100,
    'https://example.com/jugo-naranja.jpg',
    '6',
    NULL,
    'quilmes'
  ),
  (
    '18RefrescoID',
    'Refresco de cola',
    2400,
    'lt',
    'Refresco de cola con edulcorantes naturales',
    80,
    'https://example.com/refresco-cola.jpg',
    '6',
    '3',
    'quilmes'
  ),
  (
    '19CervezaID',
    'Cerveza artesanal',
    4200,
    'lt',
    'Cerveza artesanal de trigo, con tonos cítricos',
    60,
    'https://example.com/cerveza-artesanal.jpg',
    '7',
    NULL,
    'quilmes'
  ),
  (
    '1ArrozID',
    'Arroz integral',
    800,
    'kg',
    'Arroz integral de calidad premium',
    100,
    'https://example.com/arroz-integral.jpg',
    '1',
    NULL,
    'unilever'
  ),
  (
    '20VinoBlancoID',
    'Vino blanco seco',
    2500,
    'lt',
    'Vino blanco seco, con notas de cítricos',
    50,
    'https://example.com/vino-blanco-seco.jpg',
    '7',
    '2',
    'unilever'
  ),
  (
    '21WhiskyID',
    'Whisky single malt',
    4500,
    'lt',
    'Whisky single malt envejecido en barrica',
    30,
    'https://example.com/whisky-single-malt.jpg',
    '7',
    NULL,
    'unilever'
  ),
  (
    '22MochilaID',
    'Mochila de viaje',
    23400,
    'unitary',
    'Mochila de viaje impermeable y con múltiples bolsillos',
    70,
    'https://example.com/mochila-viaje.jpg',
    '8',
    '1',
    'unilever'
  ),
  (
    '23BicicletaID',
    'Bicicleta plegable',
    29900,
    'unitary',
    'Bicicleta plegable de aluminio, ideal para viajes',
    70,
    'https://example.com/bicicleta-viajes.jpg',
    '8',
    NULL,
    'unilever'
  ),
  (
    '24CestaID',
    'Cesta de picnic',
    10500,
    'unitary',
    'Cesta de picnic con servicio para 4 personas',
    40,
    'https://example.com/cesta-picnic.jpg',
    '8',
    NULL,
    'molinos-cañuelas'
  ),
  (
    '2HarinaID',
    'Harina de trigo',
    850,
    'kg',
    'Harina de trigo de alta pureza',
    80,
    'https://example.com/harina-trigo.jpg',
    '1',
    '2',
    'molinos-cañuelas'
  ),
  (
    '3AzucarID',
    'Azúcar moreno',
    900.50,
    'kg',
    'Azúcar moreno orgánico sin refinar',
    90,
    'https://example.com/azucar-moreno.jpg',
    '1',
    NULL,
    'molinos-cañuelas'
  ),
  (
    '4SalmónID',
    'Filete de salmón',
    13000,
    'kg',
    'Filete de salmón fresco y de primera calidad',
    50,
    'https://example.com/filete-salmon.jpg',
    '2',
    '1',
    'molinos-cañuelas'
  ),
  (
    '5PolloID',
    'Pollo congelado',
    3460,
    'kg',
    'Pollo entero congelado, sin aditivos',
    80,
    'https://example.com/pollo-congelado.jpg',
    '2',
    NULL,
    'molinos-cañuelas'
  ),
  (
    '6HeladoID',
    'Helado de vainilla',
    2000,
    'lt',
    'Delicioso helado de vainilla artesanal',
    60,
    'https://example.com/helado-vainilla.jpg',
    '2',
    '3',
    'mondelez'
  ),
  (
    '7CuadernoID',
    'Cuaderno universitario',
    3200,
    'unitary',
    'Cuaderno universitario de 100 hojas rayadas',
    120,
    'https://example.com/cuaderno-universitario.jpg',
    '3',
    NULL,
    'mondelez'
  ),
  (
    '8BoligrafoID',
    'Bolígrafo retráctil',
    255,
    'unitary',
    'Bolígrafo retráctil de tinta azul',
    150,
    'https://example.com/boligrafo-retractil.jpg',
    '3',
    '2',
    'mondelez'
  ),
  (
    '9LibroID',
    'Libro de novela',
    1300,
    'unitary',
    'Libro de novela contemporánea, best seller',
    80,
    'https://example.com/libro-novela.jpg',
    '3',
    NULL,
    'mondelez'
  );

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `promotion`
--
CREATE TABLE `promotion` (
  `promotionId` varchar(255) NOT NULL,
  `percentage` int(11) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Volcado de datos para la tabla `promotion`
--
INSERT INTO
  `promotion` (`promotionId`, `percentage`)
VALUES
  ('1', 0.05),
  ('2', 0.1),
  ('3', 0.15);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `user`
--
CREATE TABLE `user` (
  `userId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('client', 'owner') NOT NULL DEFAULT 'client'
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Volcado de datos para la tabla `user`
--
INSERT INTO
  `user` (`userId`, `name`, `email`, `password`, `role`)
VALUES
  (
    '1FrancoID',
    'Franco',
    'user1@example.com',
    'hashed_password1',
    'client'
  ),
  (
    '2TomasID',
    'Tomás',
    'user2@example.com',
    'hashed_password2',
    'client'
  ),
  (
    '3LunarID',
    'Lucas',
    'user3@example.com',
    'hashed_password3',
    'client'
  ),
  (
    '4FernandoID',
    'Fernando',
    'user4@example.com',
    'hashed_password4',
    'client'
  );

--
-- Índices para tablas volcadas
--
--
-- Indices de la tabla `category`
--
ALTER TABLE
  `category`
ADD
  PRIMARY KEY (`categoryId`);

--
-- Indices de la tabla `client_order`
--
ALTER TABLE
  `client_order`
ADD
  PRIMARY KEY (`clientOrderId`),
ADD
  KEY `FK_d249e497d5f9f75cdb73cc5ed5f` (`user`);

--
-- Indices de la tabla `facturation`
--
ALTER TABLE
  `facturation`
ADD
  PRIMARY KEY (`facturationId`),
ADD
  UNIQUE KEY `REL_d923a0f40146deac1d33b29c6d` (`user`);

--
-- Indices de la tabla `favorite`
--
ALTER TABLE
  `favorite`
ADD
  PRIMARY KEY (`product`, `user`),
ADD
  KEY `IDX_7ccde18a239d852513ca0dcbc4` (`product`),
ADD
  KEY `IDX_fbe62995759cc421c990baa839` (`user`);

--
-- Indices de la tabla `order_product`
--
ALTER TABLE
  `order_product`
ADD
  PRIMARY KEY (`orderProductId`),
ADD
  KEY `FK_952d14744e0c094cf8f2d92597c` (`clientOrder`),
ADD
  KEY `FK_5ddb891a36b3562dd744ca52868` (`product`);

--
-- Indices de la tabla `payment`
--
ALTER TABLE
  `payment`
ADD
  PRIMARY KEY (`paymentId`),
ADD
  KEY `FK_1900453fa4b613f775898fb9e1f` (`clientOrder`);

--
-- Indices de la tabla `product`
--
ALTER TABLE
  `product`
ADD
  PRIMARY KEY (`productId`),
ADD
  KEY `FK_d71ac3a30622a475df871b55130` (`category`),
ADD
  KEY `FK_f1af73ec068801abe172593aee3` (`promotion`);

--
-- Indices de la tabla `promotion`
--
ALTER TABLE
  `promotion`
ADD
  PRIMARY KEY (`promotionId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE
  `user`
ADD
  PRIMARY KEY (`userId`);

--
-- Restricciones para tablas volcadas
--
--
-- Filtros para la tabla `client_order`
--
ALTER TABLE
  `client_order`
ADD
  CONSTRAINT `FK_d249e497d5f9f75cdb73cc5ed5f` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `facturation`
--
ALTER TABLE
  `facturation`
ADD
  CONSTRAINT `FK_d923a0f40146deac1d33b29c6de` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `favorite`
--
ALTER TABLE
  `favorite`
ADD
  CONSTRAINT `FK_7ccde18a239d852513ca0dcbc4c` FOREIGN KEY (`product`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK_fbe62995759cc421c990baa8397` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `order_product`
--
ALTER TABLE
  `order_product`
ADD
  CONSTRAINT `FK_5ddb891a36b3562dd744ca52868` FOREIGN KEY (`product`) REFERENCES `product` (`productId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD
  CONSTRAINT `FK_952d14744e0c094cf8f2d92597c` FOREIGN KEY (`clientOrder`) REFERENCES `client_order` (`clientOrderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `payment`
--
ALTER TABLE
  `payment`
ADD
  CONSTRAINT `FK_1900453fa4b613f775898fb9e1f` FOREIGN KEY (`clientOrder`) REFERENCES `client_order` (`clientOrderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product`
--
ALTER TABLE
  `product`
ADD
  CONSTRAINT `FK_d71ac3a30622a475df871b55130` FOREIGN KEY (`category`) REFERENCES `category` (`categoryId`) ON DELETE CASCADE ON UPDATE NO ACTION,
ADD
  CONSTRAINT `FK_f1af73ec068801abe172593aee3` FOREIGN KEY (`promotion`) REFERENCES `promotion` (`promotionId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;