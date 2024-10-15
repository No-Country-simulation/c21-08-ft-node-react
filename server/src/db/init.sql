USE kramer;

-- USERS
INSERT INTO
    user (userId, name, email, password, role)
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

-- CATEGORIES
INSERT INTO
    category (categoryId, categoryName)
VALUES
    ('1', 'Almacén'),
    ('2', 'Congelados'),
    ('3', 'Librería'),
    ('4', 'Vinoteca'),
    ('5', 'Limpieza'),
    ('6', 'Bebidas sin alcohol'),
    ('7', 'Bebidas con alcohol'),
    ('8', 'Variados');

-- PROMOTIONS
INSERT INTO
    promotion (promotionId, percentage)
VALUES
    ('1', 5),
    ('2', 10),
    ('3', 15);

-- PRODUCTS
INSERT INTO
    product (
        productId,
        name,
        price,
        unitOfMeasurement,
        description,
        stock,
        imgUrl,
        category,
        promotion
    )
VALUES
    (
        '1ArrozID',
        'Arroz integral',
        3.99,
        'kg',
        'Arroz integral de calidad premium',
        100,
        'https://example.com/arroz-integral.jpg',
        '1',
        NULL
    ),
    (
        '2HarinaID',
        'Harina de trigo',
        2.50,
        'kg',
        'Harina de trigo de alta pureza',
        80,
        'https://example.com/harina-trigo.jpg',
        '1',
        '2'
    ),
    (
        '3AzucarID',
        'Azúcar moreno',
        2.75,
        'kg',
        'Azúcar moreno orgánico sin refinar',
        90,
        'https://example.com/azucar-moreno.jpg',
        '1',
        NULL
    ),
    (
        '4SalmónID',
        'Filete de salmón',
        12.99,
        'kg',
        'Filete de salmón fresco y de primera calidad',
        50,
        'https://example.com/filete-salmon.jpg',
        '2',
        '1'
    ),
    (
        '5PolloID',
        'Pollo congelado',
        6.75,
        'kg',
        'Pollo entero congelado, sin aditivos',
        80,
        'https://example.com/pollo-congelado.jpg',
        '2',
        NULL
    ),
    (
        '6HeladoID',
        'Helado de vainilla',
        4.99,
        'lt',
        'Delicioso helado de vainilla artesanal',
        60,
        'https://example.com/helado-vainilla.jpg',
        '2',
        '3'
    ),
    (
        '7CuadernoID',
        'Cuaderno universitario',
        2.25,
        'unitary',
        'Cuaderno universitario de 100 hojas rayadas',
        120,
        'https://example.com/cuaderno-universitario.jpg',
        '3',
        NULL
    ),
    (
        '8BoligrafoID',
        'Bolígrafo retráctil',
        1.50,
        'unitary',
        'Bolígrafo retráctil de tinta azul',
        150,
        'https://example.com/boligrafo-retractil.jpg',
        '3',
        '2'
    ),
    (
        '9LibroID',
        'Libro de novela',
        12.99,
        'unitary',
        'Libro de novela contemporánea, best seller',
        80,
        'https://example.com/libro-novela.jpg',
        '3',
        NULL
    ),
    (
        '10VinoID',
        'Vino tinto reserva',
        22.50,
        'unitary',
        'Vino tinto reserva, con 12 meses de crianza',
        40,
        'https://example.com/vino-tinto-reserva.jpg',
        '4',
        '1'
    ),
    (
        '11ChampagneID',
        'Champagne brut',
        35.00,
        'unitary',
        'Champagne brut, ideal para ocasiones especiales',
        30,
        'https://example.com/champagne-brut.jpg',
        '4',
        NULL
    ),
    (
        '12LicorID',
        'Licor de café',
        18.75,
        'lt',
        'Delicioso licor de café con notas a vainilla',
        50,
        'https://example.com/licor-cafe.jpg',
        '4',
        '3'
    ),
    (
        '13DetergenteID',
        'Detergente en polvo',
        4.99,
        'kg',
        'Detergente en polvo de alta eficacia',
        100,
        'https://example.com/detergente-polvo.jpg',
        '5',
        NULL
    ),
    (
        '14SuavizanteID',
        'Suavizante de ropa',
        3.75,
        'lt',
        'Suavizante de ropa concentrado, aroma a flores',
        80,
        'https://example.com/suavizante-ropa.jpg',
        '5',
        '2'
    ),
    (
        '15LavavajillasID',
        'Lavavajillas líquido',
        2.99,
        'lt',
        'Lavavajillas líquido de enjuague rápido',
        90,
        'https://example.com/lavavajillas-liquido.jpg',
        '5',
        NULL
    ),
    (
        '16AguaID',
        'Agua mineral',
        1.25,
        'lt',
        'Agua mineral natural, sin gas',
        120,
        'https://example.com/agua-mineral.jpg',
        '6',
        '1'
    ),
    (
        '17JugoID',
        'Jugo de naranja',
        2.50,
        'lt',
        'Jugo de naranja exprimido, sin azúcar',
        100,
        'https://example.com/jugo-naranja.jpg',
        '6',
        NULL
    ),
    (
        '18RefrescoID',
        'Refresco de cola',
        1.75,
        'lt',
        'Refresco de cola con edulcorantes naturales',
        80,
        'https://example.com/refresco-cola.jpg',
        '6',
        '3'
    ),
    (
        '19CervezaID',
        'Cerveza artesanal',
        3.99,
        'lt',
        'Cerveza artesanal de trigo, con tonos cítricos',
        60,
        'https://example.com/cerveza-artesanal.jpg',
        '7',
        NULL
    ),
    (
        '20VinoBlancoID',
        'Vino blanco seco',
        15.00,
        'lt',
        'Vino blanco seco, con notas de cítricos',
        50,
        'https://example.com/vino-blanco-seco.jpg',
        '7',
        '2'
    ),
    (
        '21WhiskyID',
        'Whisky single malt',
        45.00,
        'lt',
        'Whisky single malt envejecido en barrica',
        30,
        'https://example.com/whisky-single-malt.jpg',
        '7',
        NULL
    ),
    (
        '22MochilaID',
        'Mochila de viaje',
        24.99,
        'unitary',
        'Mochila de viaje impermeable y con múltiples bolsillos',
        70,
        'https://example.com/mochila-viaje.jpg',
        '8',
        '1'
    ),
    (
        '23BicicletaID',
        'Bicicleta plegable',
        299.00,
        'unitary',
        'Bicicleta plegable de aluminio, ideal para viajes',
        70,
        'https://example.com/bicicleta-viajes.jpg',
        '2',
        NULL
    ),
    (
        '24CestaID',
        'Cesta de picnic',
        35.00,
        'unitary',
        'Cesta de picnic con servicio para 4 personas',
        40,
        'https://example.com/cesta-picnic.jpg',
        '8',
        NULL
    );