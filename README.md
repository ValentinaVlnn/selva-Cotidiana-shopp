# Selva Cotidiana Shop

Proyecto base de un e-commerce desarrollado con React y Vite.

## Descripción

Este repositorio contiene la estructura inicial del proyecto, preparada para seguir creciendo en próximas entregas con componentes, catálogo de productos, carrito de compras y checkout.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ValentinaVlnn/selva-Cotidiana-shopp.git
   ```

2. Ingresar a la carpeta del proyecto:
   ```bash
   cd selva-cotidiana-shopp
   ```

3. Instalar dependencias:
   ```bash
   npm install
   ```

4. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura inicial

- `src/`
- `src/components/`
- `src/App.jsx`
- `src/main.jsx`

## Componentes creados

- Navbar
- CartWidget
- ItemListContainer
- ItemList
- Item
- ItemDetailContainer
- ItemDetail
- ItemCount

## Carga de datos simulada

Los productos se obtienen desde una promesa local en `src/mock/asyncMock.js`.
La funcion `getProducts` resuelve el listado luego de 2 segundos usando `setTimeout` para simular una carga asincrona.
La funcion `getProductById` recibe un id, busca el producto correspondiente y devuelve una promesa con el detalle individual.

## Estado del proyecto

Pre-entrega 4: vista de detalle implementada con `ItemDetailContainer`, `ItemDetail`, `ItemCount` reutilizable y promesa dinamica para buscar un producto por id.