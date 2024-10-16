</br>

# Documentacion del backend - E-commerce local de venta de frutas y verduras.

</br>

## 1. Descripcion General del Proyecto

El backend de este proyecto es una API REST que permite a los usuarios registrarse, iniciar sesión, y comprar y vender productos de almacen, principalmente enfocado en frutas y verduras. El usuario podra ver una lista de productos y agregarlos al carrito para su eventual compra.
Tambien podra ver las promociones disponibles, y filtrar las busquedas por categoria, precio, marca, entre otros.

</br>

## 2. Stack tecnologico

- **Lenguaje:** Typescript
- **Entorno de ejecucion:** Node js
- **Sistema de contenedores:** Docker
- **Base de datos:** MySQL
- **Autenticacion:** JWT
- **Servicios externos:** Mercado Pago (pagos)

</br>

## 3. Configuracion del Entorno

### a) Instalacion de dependencias

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raiz del proyecto

```bash
npm install
```
### b) Variables de entorno

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_NAME=kramer
```

### c) Como ejecutar el proyecto

```bash
npm run dev
```

</br>

## 4. Arquitectura del sistema

### a) Estructuracion de las carpetas

```bash
src/
├── common/
├── controllers/
├── dto/
├── entities/
├── exceptions/
├── middlewares/
├── repositories/
├── routes/
├── services/
├── app.ts
├── data-source.ts
├── server.ts
```

</br>

### b) Diagrama de arquitectura

</br>

![Captura de pantalla 2024-10-15 162751](https://github.com/user-attachments/assets/e577a35c-1e2a-4502-8f7b-0890a2fce7e6)

</br>

## 5. Endpoints de la API

## **Usuarios**

  ### **GET:** `/user`

- **Descripcion:** Metodo que devuelve un arreglo con todos los usuarios disponibles en la base de datos
- **Parametros:** No se requieren parametros
#### **Respuesta exitosa:**
 - **Status:** `200 OK`
 - **Contenido:** Un arreglo de objetos de tipo User, si no hay usuarios devuelve un arreglo vacio `[]`
 - **Body:**
   
```json
[
 {
  "userId": "user01",
  "name": "John Doe",
  "email": "john@gmail.com",
  "role": "client"
 },
 {
  "userId": "user02",
  "name": "Lianne Keitha",
  "email": "lianne@gmail.com",
  "role": "client"
 }
]
```

#### **Posibles errores:**
- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

## **Categorias**

  ### **GET:** `/category`

- **Descripcion:** Metodo que devuelve un arreglo con todas las categorias disponibles en la base de datos
- **Parametros:** No se requieren parametros
#### **Respuesta exitosa:**
 - **Status:** `200 OK`
 - **Contenido:** Un arreglo de objetos de tipo Category, si no hay categorias devuelve un arreglo vacio `[]`
 - **Body:**
   
```json
[
 {
  "categoryId": "cat01",
  "categoryName": "Categoria 1"
 },
 {
  "categoryId": "cat02",
  "categoryName": "Categoria 2"
 }
]
```

#### **Posibles errores:**
- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

## **Productos**

### **GET:** `/product`

- **Descripcion:** Metodo que devuelve un arreglo con todos los productos disponibles en la base de datos
- **Parametros:** No se requieren parametros
#### **Respuesta exitosa:**
 - **Status:** `200 OK`
 - **Contenido:** Un arreglo de objetos de tipo Product, si no hay productos devuelve un arreglo vacio `[]`
 - **Body:**
   
```json
[
    {
      "productId": "prod01",
      "name": "aceite natura x 900ml.",
      "brand": "Natura",
      "price": 0,
      "unitOfMeasurement": "unitary",
      "description": "Aceite de girasol de primera calidad",
      "stock": 19,
      "imgUrl": "www.google.com/aceite-natura",
      "category": { "categoryId": "category04", "categoryName": "Almacen" },
      "promotion": {
        "promotionId": "promotion01",
        "percentage": 0.1
      }
    },
    {
      "productId": "prod02",
      "name": "banana ecuador",
      "brand": null,
      "price": 3400,
      "unitOfMeasurement": "kg",
      "description": "Tremendas bananas",
      "stock": 50,
      "imgUrl": "www.google.com/banana-ecuador",
      "category": { "categoryId": "category01", "categoryName": "Frutas" },
      "promotion": null
    }
]
```

#### **Posibles errores:**
- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

### **GET:** `/product/category/:categoryId`

- **Descripcion:** Metodo que devuelve un arreglo con todos los productos de una categoria especifica
- **Parametros:** No se requieren parametros
  - `categoryId` (string): El id de la categoria
#### **Respuesta exitosa:**
 - **Status:** `200 OK`
 - **Contenido:** Un arreglo de objetos de tipo Product de una categoria en especifico, si no hay productos devuelve un arreglo vacio `[]`
 - **Body:**
   
```json
[
    {
      "productId": "prod01",
      "name": "aceite natura x 900ml.",
      "brand": "Natura",
      "price": 0,
      "unitOfMeasurement": "unitary",
      "description": "Aceite de girasol de primera calidad",
      "stock": 19,
      "imgUrl": "www.google.com/aceite-natura",
      "category": { "categoryId": "category04", "categoryName": "Almacen" },
      "promotion": {
        "promotionId": "promotion01",
        "percentage": 0.1
      }
    },
    {
      "productId": "prod02",
      "name": "Fideos Marolio x 500gr.",
      "brand": null,
      "price": 3400,
      "unitOfMeasurement": "unitary",
      "description": "Los mejores fideos de la ciudad",
      "stock": 40,
      "imgUrl": "www.google.com/fideos-marolio",
      "category": { "categoryId": "category04", "categoryName": "Almacen" },
      "promotion": null
    }
]
```

#### **Posibles errores:**
- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Categoria no encontrada

</br>


## Promociones

  ### **GET:** `/promotion`

- **Descripcion:** Metodo que devuelve un arreglo con todas las promociones disponibles en la base de datos
- **Parametros:** No se requieren parametros
#### **Respuesta exitosa:**
 - **Status:** `200 OK`
 - **Contenido:** Un arreglo de objetos de tipo Promotion, si no hay promociones devuelve un arreglo vacio `[]`
 - **Body:**
   
```json
[
  {
    "promotionId": "prom01",
    "percentage": 0.1,
    "product": [
      {
        "productId": "prod01",
        "name": "aceite natura x 900ml.",
        "brand": "Natura",
        "price": 0,
        "unitOfMeasurement": "unitary",
        "description": "Aceite de girasol de primera calidad",
        "stock": 19,
        "imgUrl": "www.google.com/aceite-natura",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      },
      {
        "productId": "prod02",
        "name": "Fideos Marolio x 500gr.",
        "brand": null,
        "price": 3400,
        "unitOfMeasurement": "unitary",
        "description": "Los mejores fideos de la ciudad",
        "stock": 40,
        "imgUrl": "www.google.com/fideos-marolio",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      }
    ]
  },
  {
    "promotionId": "prom01",
    "percentage": 0.1,
    "product": [
      {
        "productId": "prod01",
        "name": "aceite natura x 900ml.",
        "brand": "Natura",
        "price": 0,
        "unitOfMeasurement": "unitary",
        "description": "Aceite de girasol de primera calidad",
        "stock": 19,
        "imgUrl": "www.google.com/aceite-natura",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      },
      {
        "productId": "prod02",
        "name": "Fideos Marolio x 500gr.",
        "brand": null,
        "price": 3400,
        "unitOfMeasurement": "unitary",
        "description": "Los mejores fideos de la ciudad",
        "stock": 40,
        "imgUrl": "www.google.com/fideos-marolio",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      }
    ]
  }
]

```

#### **Posibles errores:**
- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
