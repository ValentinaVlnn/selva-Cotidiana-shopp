import { Link } from 'react-router-dom'

import { useCart } from '../../context/useCart'

const CartWidget = () => {
  const { totalItems } = useCart()

  return (
    <Link className="cart-widget" to="/cart">
      🛒 {totalItems > 0 ? totalItems : ''}
    </Link>
  )
}

export default CartWidget