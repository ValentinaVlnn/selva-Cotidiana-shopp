import { getProductById, getProducts } from '../src/mock/asyncMock.js'

const run = async () => {
  console.log('Iniciando prueba aislada del mock...')

  const products = await getProducts()
  console.log(`Productos recibidos: ${products.length}`)
  console.log('Primer producto:', products[0])

  const product = await getProductById(1)
  console.log('Detalle del producto 1:', product)
}

run().catch((error) => {
  console.error('Fallo la prueba del mock:', error)
  process.exitCode = 1
})