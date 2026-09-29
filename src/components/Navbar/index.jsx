import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { getCategories } from '../../firebase/bd'
import CartWidget from '../CartWidget'

const Navbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((firebaseCategories) => {
      setCategories(firebaseCategories)
    })
  }, [])

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