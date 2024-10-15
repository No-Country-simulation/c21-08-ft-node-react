# Documentacion del backend - E-commerce local de venta de frutas y verduras.

</br>

## 1. Descripcion General del Proyecto

El backend de este proyecto es una API REST que permite a los usuarios registrarse, iniciar sesión, y comprar y vender productos de almacen, principalmente enfocado en frutas y verduras. El usuario podra ver una lista de productos y agregarlos al carrito para su eventual compra.
Tambien podra ver las promociones disponibles, y filtrar las busquedas por categoria, precio, marca, entre otros.

</br>

## 2. Stack tecnologico

- **Lenguaje:** Typescript
- **Entorno de ejecucion:** Node js
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

### **Autenticacion de usuarios**
