import { useState } from 'react'
import { Link } from 'react-router-dom'

import { createOrder } from '../../firebase/bd'
import { useCart } from '../../context/useCart'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  deliveryWindow: 'manana-9:00-13:00',
}

const Checkout = () => {
  const { cart, totalPrice, clear } = useCart()
  const [form, setForm] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)
    setError('')

    const orderData = {
      buyer: {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        deliveryWindow: form.deliveryWindow,
      },
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
    }

    try {
      const newOrderId = await createOrder(orderData)
      setOrderId(newOrderId)
      setIsSubmitted(true)
      clear()
    } catch {
      setError('Ocurrio un error al procesar tu compra. Intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="checkout-page">
        <h2>Checkout</h2>
        <div className="checkout-empty">
          <p className="checkout-success-message">¡Tu compra se ha realizado con exito!</p>
          <p className="checkout-order-id">ID de la orden: {orderId}</p>
          <Link className="checkout-back-link" to="/">
            Volver al catalogo
          </Link>
        </div>
      </section>
    )
  }

  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <h2>Checkout</h2>
        <div className="checkout-empty">
          <p>No hay productos en el carrito para completar la compra.</p>
          <Link className="checkout-back-link" to="/">
            Volver al catalogo
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <div className="checkout-summary">
          <h3>Resumen de compra</h3>
          <div className="checkout-summary-list">
            {cart.map((item) => (
              <article key={item.id} className="checkout-summary-item">
                <div>
                  <p className="checkout-summary-name">{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <p>${item.price * item.quantity}</p>
              </article>
            ))}
          </div>
          <p className="checkout-total">Total: ${totalPrice}</p>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Datos de entrega</h3>

          <label htmlFor="fullName">Nombre y apellido</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Numero de telefono</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Direccion de entrega</label>
          <input
            id="address"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="deliveryWindow">Horario de entrega</label>
          <select
            id="deliveryWindow"
            name="deliveryWindow"
            value={form.deliveryWindow}
            onChange={handleChange}
            required
          >
            <option value="manana-9:00-13:00">Manana 9:00 13:00</option>
            <option value="tarde-15:00-19:00">Tarde-15:00 19:00</option>
          </select>

          <button type="submit" className="checkout-submit-button">
            {isSubmitting ? 'Procesando compra...' : 'Confirmar datos'}
          </button>

          {error ? <p className="checkout-error-message">{error}</p> : null}
        </form>
      </div>
    </section>
  )
}

export default Checkout