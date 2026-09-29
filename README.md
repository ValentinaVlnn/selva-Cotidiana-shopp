# Selva Cotidiana Shop

E-commerce desarrollado con React, Vite y React Router DOM.

## Descripción

Selva Cotidiana Shop es una tienda online de plantas y macetas. El proyecto incluye catálogo de productos, navegación por categorías, detalle individual, carrito global con Context API y una estructura simple pensada para las pre-entregas del curso.

## Tecnologías utilizadas

- React
- React Router DOM
- Vite
- JavaScript
- CSS

## Instalación y ejecución

1. Clonar el repositorio.
2. Ingresar a la carpeta del proyecto.
3. Instalar dependencias con `npm install`.
4. Ejecutar el entorno local con `npm run dev`.

## Funcionalidades implementadas

- Catálogo completo en la ruta `/`.
- Navegación por categorías mediante rutas dinámicas `/category/:categoryId`.
- Detalle individual de producto en `/item/:id`.
- Layout persistente con `Navbar`, `Footer` y `CartWidget` visibles en todas las rutas.
- Ruta 404 con componente `NotFound` para URLs inexistentes.
- Carrito global manejado con Context API.
- Agregado, eliminación y vaciado de productos en el carrito.
- Datos simulados con promesas desde `asyncMock`.

## Estructura principal

- `src/App.jsx`: definición de rutas.
- `src/main.jsx`: montaje de `BrowserRouter` y `CartProvider`.
- `src/context/CartContext.jsx`: estado global del carrito.
- `src/mock/asyncMock.js`: productos, categorías y promesas simuladas.
- `src/components/Navbar/index.jsx`: navegación principal y acceso al carrito.
- `src/components/ItemListContainer/index.jsx`: carga y filtrado de productos.
- `src/components/ItemDetailContainer/index.jsx`: carga del detalle de producto.
- `src/components/Cart/index.jsx`: vista del carrito.

## Estado actual

El proyecto funciona con datos mockeados y cubre catálogo, navegación, detalle, carrito y rutas básicas requeridas para las entregas actuales.