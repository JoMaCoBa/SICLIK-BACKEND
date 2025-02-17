# 🍽 SICLIK - Backend

Este proyecto es el backend de una tienda en línea, desarrollado con Node.js, Express y MySQL, utilizando Sequelize como ORM.

---

## 📂 Estructura del Proyecto

### 💁 Rutas Disponibles (`routes/orders.js`)
- **GET /orders** → Obtiene todas las órdenes.
- **POST /orders** → Crea una nueva orden.

### 📁 Rutas Disponibles (`routes/products.js`)
- **GET /products** → Obtiene todos los productos disponibles.

### 📝 Modelo de Datos (`models/Order.js`)
```js
const Order = sequelize.define('Order', {
  OrderId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  products: { type: DataTypes.JSON, allowNull: false } // Lista de productos
});
```

### 📝 Modelo de Datos (`models/Product.js`)
```js
const Product = sequelize.define('Product', {
  productId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false }
});
```

### 🔄 Ejemplo de Petición GET para Obtener Productos
```http
GET /products
```
📁 Ejemplo de Respuesta:
```json
[
  { "productId": 1, "name": "Laptop", "price": 1200, "image": "laptop.jpg" },
  { "productId": 2, "name": "Mouse", "price": 50, "image": "mouse.jpg" }
]
```

### 🔄 Ejemplo de Petición POST para Realizar un Pedido
```json
{
  "name": "Manuel",
  "email": "correo@gmail.com",
  "address": "Av. Central",
  "products": {
    "1": { "name": "Laptop", "price": 1200 },
    "2": { "name": "Mouse", "price": 50 }
  }
}
```

### 📁 Conexión a la Base de Datos
Configurada en `config/database.js` con Sequelize.
Se ejecuta `sequelize.sync()` para asegurar que las tablas existan.

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el Repositorio
```bash
 git clone https://github.com/JoMaCoBa/SICLIK-BACKEND.git
 cd SICLIK-BACKEND
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Crear el Archivo `.env`
Crea un archivo `.env` en la raíz del proyecto con la siguiente información:
```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_DIALECT=
PORT=
```

### 4️⃣ Ejecutar el Backend
```bash
npm run dev
```
El backend correrá en `http://localhost:3000/`.

---

## 🛠 Tecnologías Utilizadas
- Node.js
- Express
- MySQL
- Sequelize

---

## 📝 Licencia
Este proyecto está bajo la licencia **MIT**.

