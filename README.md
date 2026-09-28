# Selva Cotidiana Shop

E-commerce desarrollado con React, Vite y React Router DOM.

## Descripción

Este checkpoint consolida la navegación principal de la tienda para que el usuario pueda recorrer el catálogo, filtrar por categorías, ver el detalle de cada producto y gestionar la compra desde el detalle y el carrito sin pantallas intermedias innecesarias.

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

## Prueba aislada del mock

Antes de conectar los datos a los componentes, el mock se puede validar de forma independiente con:

- `npm run mock:test`

Ese script ejecuta `getProducts()` y `getProductById(1)` desde `scripts/checkAsyncMock.mjs` y muestra la respuesta en consola para comprobar que la promesa resuelve correctamente.

## Funcionalidades implementadas

- Catálogo completo en la ruta `/`.
- Navegación por categorías mediante rutas dinámicas `/category/:categoryId`.
- Detalle individual de producto en `/item/:id`.
- Layout persistente con `Navbar`, `Footer` y `CartWidget` visibles en todas las rutas.
- Ruta 404 con componente `NotFound` para URLs inexistentes.
- Carrito global manejado con Context API.

## Categorías disponibles

- `/category/plantas-interior`
- `/category/cactus`
- `/category/macetas`

## Estructura principal

- `src/App.jsx`: definición de rutas.
- `src/main.jsx`: montaje de `BrowserRouter` y `CartProvider`.
- `src/components/Layout/index.jsx`: layout compartido.
- `src/components/ItemListContainer/index.jsx`: carga y filtrado de productos según la URL.
- `src/components/ItemDetailContainer/index.jsx`: carga de detalle por id.
- `src/context/CartContext.jsx`: estado global del carrito.
- `src/mock/asyncMock.js`: base de datos simulada y carga asíncrona.

## Flujo de carga asincrona

La carga de datos se simula en `src/mock/asyncMock.js` con promesas y `setTimeout` de 2 segundos.

- `getProducts()` devuelve todo el catalogo luego de la espera simulada.
- `getProductById(id)` busca un producto puntual y rechaza la promesa si el id no existe.

## Rol de los componentes en ese flujo

- `Layout` mantiene visibles el `Navbar` y el `Footer` mientras cambia la ruta activa.
- `Navbar` arma la navegacion por categorias usando la configuracion del mock.
- `ItemListContainer` lee `categoryId` desde la URL, llama a `getProducts()` y filtra por categoria cuando corresponde.
- `ItemList` renderiza el listado recibido sin encargarse de pedir datos.
- `ItemDetailContainer` obtiene el `id` desde la ruta y llama a `getProductById()` para resolver el detalle.
- `ItemDetail` muestra la informacion del producto y conecta la accion de agregar al carrito.

## Estado actual

Checkpoint 3 de navegación completo: catálogo con routing, categorías dinámicas, detalle de producto, layout persistente, ruta de error y flujo de compra simplificado entre detalle y carrito.