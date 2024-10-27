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
![Captura de pantalla 2024-10-21 182813](https://github.com/user-attachments/assets/66016b47-1889-4e98-8402-a1083a4ae275)


</br>



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

---

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

---

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
- **Parametros:**
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

### **GET:** `/product/promotion`

- **Descripcion:** Metodo que devuelve un arreglo con todos los productos que tienen descuento
- **Parametros:** No se requieren parametros

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo Product, si no hay productos devuelve un arreglo vacio `[]`
- **Body:**

```json
[
  {
    "productId": "prod02",
    "name": "Leche La Serenisima x 1L",
    "price": 2500,
    "unitOfMeasurement": "lt",
    "description": "La leche mas fresca",
    "stock": 150,
    "imgUrl": "www.google.com",
    "brand": null,
    "category": {
      "categoryId": "cate02",
      "categoryName": "Bebidas"
    },
    "promotion": {
      "promotionId": "promo01",
      "percentage": 10
    }
  },
  {
    "productId": "prod03",
    "name": "Aceite Natura x 900ml",
    "price": 4200,
    "unitOfMeasurement": "lt",
    "description": "El mejor aceite",
    "stock": 150,
    "imgUrl": "www.google.com",
    "brand": null,
    "category": {
      "categoryId": "cate02",
      "categoryName": "Bebidas"
    },
    "promotion": {
      "promotionId": "promo01",
      "percentage": 10
    }
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

---

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

</br>

---

</br>

## Ordenes

### **GET:** `/order/:clientOrderId`

- **Descripcion:** Metodo que devuelve un pedido por Id.
- **Parametros:**
```json
  {
    //Ejemplo: `http://localhost:3170/order/4ec23eb3-4943-47f1-a6be-db14fc491150`
    "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un objeto de tipo ClientOrder
- **Body:**

```json
{
    "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
    "createdAt": "2024-10-24T12:33:58.000Z",
    "isConfirmed": false,
    "delivery": false,
    "methodOfPayment": "cash",
    "status": "unprepared"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Orden no encontrada

<br />

### **GET:** `/order/user/:userId`

- **Descripcion:** Metodo que devuelve los pedidos de un usuario en particular
- **Parametros:**
```json
  {
    //Ejemplo: `http://localhost:3170/order/user/3LunarID`
    "userId": "3LunarID"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de tipo ClientOrder
- **Body:**

```json
[
    {
        "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
        "createdAt": "2024-10-24T12:33:58.000Z",
        "isConfirmed": false,
        "delivery": false,
        "methodOfPayment": "cash",
        "status": "unprepared"
    },
    {
        "clientOrderId": "ca68b269-5627-48ab-81fe-95f888487626",
        "createdAt": "2024-10-23T19:29:39.000Z",
        "isConfirmed": false,
        "delivery": false,
        "methodOfPayment": "cash",
        "status": "unprepared"
    }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Usuario no encontrado

<br />

### **POST:** `/order/create`

- **Descripcion:** Metodo que crea una orden de compra y envia un mail de confirmacion al usuario.
- **Parametros:**
```json
  {
    "userId": "user01",
    "delivery": true,
    "methodOfPayment": "electronic" 
  }

  // o

    {
    "userId": "user02",
    "delivery": false,
    "methodOfPayment": "cash" 
  }
  ```
  
 - **Enums:**
  ```javascript
   export enum MethodOfPayment {
    CASH = "cash",
    ELECTRONIC = "electronic"
   }
   ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un objeto con las propiedades message y orderId
- **Body:**

```json
{
    "message": "Order succesfully created",
    "orderId": "fd781742-c1a2-444a-9558-702d80d13860"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **400 Bad Request:** Falta uno o mas parametros
```json
  {
    "message": [
      "userId must be a string",
      "delivery must be a boolean",
      "methodOfPayment must be a value of MethodOfPayment"
  ]
  }
  ```
- **400 Bad Request:** Propiedad no requerida por parametro
```json
  {
    "message": [
      "propiedadDeEjemplo must not exist",
  ]
  }
```

<br />

### **GET:** `/order/confirm`

- **Descripcion:** Metodo que confirma el pedido al ingresar desde el link proporcionado por el correo electronico
- **Queries:**
```json
  {
    //Al pasar la query la URL quedaria algo como `http://localhost:3170/order/confirm?orderId=fd781742-c1a2-444a-9558-702d80d13860`
    "orderId": "fd781742-c1a2-444a-9558-702d80d13860"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un objeto con las propiedades message y orderId
- **Body:**

```json
{
    "message": "Order succesfully confirmed",
    "orderId": "fd781742-c1a2-444a-9558-702d80d13860"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Orden no existente

<br/>

## **Carrito (entidad "OrderProduct")**

### **POST:** `/cart/:orderId`

- **Descripcion:** Metodo para asignar productos a una orden existente
- **Parametros:**
  ```json
  {
    //Ejemplo: `http://localhost:3170/cart/4ec23eb3-4943-47f1-a6be-db14fc491150`
    "orderId": "4ec23eb3-4943-47f1-a6be-db14fc491150"
  }
  ```
- **Body:**
  ```json
  {
    "products": [
        {
            "productId": "10VinoID",
            "productQty": 2
        },
        {
            "productId": "11ChampagneID",
            "productQty": 3
        }
    ]
}
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un mensaje que indica que los products fueron añadidos al carrito satisfactoriamente
- **Body:**

```json
{
    "message": "Products added to cart succesfully"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Orden no encontrada
- **404 Not Found:** Producto no encontrado

</br>

---

</br>
