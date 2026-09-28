import { Link, NavLink } from 'react-router-dom'

import { categories } from '../../mock/asyncMock'
import CartWidget from '../CartWidget'

const Navbar = () => {
  return (
    <header className="navbar">
      <Link className="navbar-brand" to="/">
        Selva Cotidiana Shop
      </Link>
      <div className="navbar-menu">
        <nav className="navbar-categories">
            {categories.map((category) => (
              <NavLink key={category.id} to={`/category/${category.id}`}>
                {category.label}
              </NavLink>
            ))}
        </nav>
        <CartWidget />
      </div>
    </header>
  )
}

export default Navbar