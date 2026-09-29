import { Link } from 'react-router-dom'

import { useCart } from '../../context/useCart'

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useCart()

  return (
    <section className="cart-page">
      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito esta vacio. Explora el catalogo y suma tus plantas favoritas.</p>
          <Link className="cart-empty-link" to="/">
            Volver al catalogo
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-list">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio unitario: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
                <button
                  type="button"
                  className="cart-remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total: ${totalPrice}</p>
            <div className="cart-actions">
              <button type="button" className="clear-cart-button" onClick={clear}>
                Vaciar carrito
              </button>
              <Link className="clear-cart-button" to="/">
                Seguir comprando
              </Link>
              <Link className="checkout-button" to="/checkout">
                Finalizar compra
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart