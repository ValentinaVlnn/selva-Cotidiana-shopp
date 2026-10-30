import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../../context/useCart'
import ItemCount from '../ItemCount'

const ItemDetail = ({ product }) => {
  const { addItem, getItemQuantity } = useCart()
  const parsedStock = Number(product.stock)
  const hasValidStock = Number.isFinite(parsedStock) && parsedStock >= 0
  const quantityInCart = getItemQuantity(product.id)
  const remainingStock = hasValidStock ? Math.max(parsedStock - quantityInCart, 0) : Infinity
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const quantity = remainingStock === 0 ? 0 : Math.min(selectedQuantity, remainingStock)

  const handleIncrement = () => {
    setSelectedQuantity(Math.min(quantity + 1, remainingStock))
  }

  const handleDecrement = () => {
    setSelectedQuantity(Math.max(quantity - 1, 1))
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      addItem(product, quantity)
      setSelectedQuantity(1)
    }
  }

  return (
    <article className="item-detail">
      <div className="item-detail-image">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="item-detail-content">
        <h2>{product.name}</h2>
        <p className="item-detail-category">{product.category}</p>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-description">{product.description}</p>
        {hasValidStock ? (
          <p className="item-detail-stock">
            {remainingStock === 0
              ? 'Ya agregaste todo el stock disponible de este producto.'
              : `Stock disponible: ${remainingStock}`}
          </p>
        ) : null}
        <div className="item-detail-actions">
          <ItemCount
            count={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <div className="item-detail-buttons">
            <button
              type="button"
              className="add-to-cart-button"
              onClick={handleAddToCart}
              disabled={quantity === 0}
            >
              Agregar al carrito
            </button>
            <Link className="finish-purchase-button" to="/cart">
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail