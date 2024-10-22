CREATE DATABASE IF NOT EXISTS kramer;

USE kramer;

INSERT INTO
  `promotion` (`promotionId`, `percentage`)
VALUES
  ('1', 0.05),
  ('2', 0.1),
  ('3', 0.15);

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