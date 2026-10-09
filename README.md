# Selva Cotidiana Shop

E-commerce desarrollado con React, Vite, React Router DOM y Firebase Firestore.

## Descripción

Selva Cotidiana Shop es una tienda online de plantas y macetas. El proyecto incluye catálogo de productos, navegación por categorías, detalle individual, carrito global con Context API y una estructura simple pensada para las pre-entregas del curso.

## Tecnologías utilizadas

- React
- React Router DOM
- Vite
- Firebase
- Cloud Firestore
- JavaScript
- CSS

## Instalación y ejecución

1. Clonar el repositorio.
2. Ingresar a la carpeta del proyecto.
3. Instalar dependencias con `npm install`.
4. Crear un archivo `.env.local` con las credenciales de Firebase.
5. Ejecutar el entorno local con `npm run dev`.

### Variables de entorno

El proyecto usa variables de entorno de Vite para inicializar Firebase. Se esperan las siguientes claves en `.env.local`:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Si alguna falta, la app detiene la inicialización y muestra un error claro desde la configuración de Firebase.

## Funcionalidades implementadas

- Catálogo completo en la ruta `/`.
- Navegación por categorías mediante rutas dinámicas `/category/:categoryId`.
- Detalle individual de producto en `/item/:id`.
- Layout persistente con `Navbar`, `Footer` y `CartWidget` visibles en todas las rutas.
- Ruta 404 con componente `NotFound` para URLs inexistentes.
- Registro e inicio de sesión con email y contraseña mediante Firebase Authentication.
- Persistencia de sesión con `onAuthStateChanged` y cierre de sesión desde la barra de navegación.
- Carrito global manejado con Context API.
- Agregado, eliminación y vaciado de productos en el carrito.
- Persistencia de productos, categorías y órdenes en Firestore.
- Manejo visible de errores en componentes con cargas asíncronas.

## Estructura principal

- `src/App.jsx`: definición de rutas.
- `src/main.jsx`: montaje de `BrowserRouter` y `CartProvider`.
- `src/context/AuthContext.jsx`: estado global del usuario autenticado y acciones de auth.
- `src/context/CartContext.jsx`: estado global del carrito.
- `src/firebase/config.js`: inicialización de Firebase con variables de entorno.
- `src/firebase/bd.js`: consultas y escrituras a Firestore.
- `src/mock/asyncMock.js`: dataset mock auxiliar para pruebas puntuales.
- `src/components/Auth/index.jsx`: pantalla de registro e inicio de sesión.
- `src/components/Navbar/index.jsx`: navegación principal y acceso al carrito.
- `src/components/ProtectedRoute/index.jsx`: protección de rutas para checkout autenticado.
- `src/components/ItemListContainer/index.jsx`: carga y filtrado de productos.
- `src/components/ItemDetailContainer/index.jsx`: carga del detalle de producto.
- `src/components/Cart/index.jsx`: vista del carrito.

## Estructura de colecciones en Firestore

### `categories`

Cada documento representa una categoría y actualmente expone este campo:

```json
{
	"categoryName": "Plantas de interior"
}
```

La app transforma `categoryName` en un slug para las rutas. Por ejemplo, `Plantas de interior` se convierte en `plantas-interior`. Ese valor debe coincidir con `categoryId` en la colección `products`.

### `products`

Cada documento de producto debe tener esta estructura base:

```json
{
	"name": "Monstera Deliciosa",
	"price": 990,
	"categoryId": "plantas-interior",
	"category": "Plantas de interior",
	"img": "https://...",
	"stock": 8,
	"description": "Planta de hojas grandes ideal para dar volumen y verde a cualquier ambiente."
}
```

### `orders`

Las órdenes se crean desde checkout con esta forma:

```json
{
	"user": {
		"uid": "firebase-user-id",
		"email": "mail@dominio.com",
		"displayName": "Valentina"
	},
	"buyer": {
		"fullName": "Nombre Apellido",
		"email": "mail@dominio.com",
		"phone": "1122334455",
		"address": "Calle 123",
		"deliveryWindow": "manana-9:00-13:00"
	},
	"items": [
		{
			"id": "abc123",
			"name": "Monstera Deliciosa",
			"price": 990,
			"quantity": 2
		}
	],
	"total": 1980,
	"createdAt": "serverTimestamp()"
}
```

## Estado actual

El proyecto ya trabaja sobre Firestore para catálogo, categorías y órdenes. También mantiene un dataset mock aislado para pruebas manuales, pero el flujo principal de la aplicación consume Firebase.