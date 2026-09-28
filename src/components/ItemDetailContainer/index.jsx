import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProductById } from '../../mock/asyncMock'
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')
  const { id } = useParams()
  const productId = Number(id)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setProduct(null)
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
      {error ? <p className="item-detail-error">{error}</p> : null}
      {!product && !error ? <p className="item-detail-loading">Cargando detalle...</p> : null}
      {product ? <ItemDetail key={product.id} product={product} /> : null}
    </section>
  )
}

export default ItemDetailContainer