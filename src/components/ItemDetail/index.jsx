import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../../context/useCart'
import ItemCount from '../ItemCount'

const ItemDetail = ({ product }) => {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(product.stock > 0 ? 1 : 0)

  const handleIncrement = () => {
    setQuantity((currentQuantity) => {
      if (currentQuantity < product.stock) {
        return currentQuantity + 1
      }

      return currentQuantity
    })
  }

  const handleDecrement = () => {
    setQuantity((currentQuantity) => {
      if (currentQuantity > 1) {
        return currentQuantity - 1
      }

      return currentQuantity
    })
  }

  const handleAddToCart = (quantity) => {
    if (quantity > 0) {
      addItem(product, quantity)
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
              onClick={() => handleAddToCart(quantity)}
              disabled={product.stock === 0 || quantity === 0}
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