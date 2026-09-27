import { useEffect, useState } from 'react'

import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ productId }) => {
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!productId) {
      setProduct(null)
      setError('')
      return
    }

    const loadProduct = async () => {
      try {
        setError('')
        const productData = await getProductById(productId)
        setProduct(productData)
      } catch (loadError) {
        setProduct(null)
        setError(loadError.message)
      }
    }

    loadProduct()
  }, [productId])

  return (
    <section className="item-detail-section">
      <div className="item-detail-header">
        <h2>Detalle del producto</h2>
      </div>
      {!productId ? <p className="item-detail-empty">Selecciona un producto para ver su detalle.</p> : null}
      {error ? <p className="item-detail-error">{error}</p> : null}
      {!product && !error ? <p className="item-detail-loading">Cargando detalle...</p> : null}
      {product ? <ItemDetail product={product} /> : null}
    </section>
  )
}

export default ItemDetailContainer