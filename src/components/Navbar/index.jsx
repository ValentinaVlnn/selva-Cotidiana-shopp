import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { getCategories } from '../../firebase/bd'
import { useAuth } from '../../context/useAuth'
import CartWidget from '../CartWidget'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState('')
  const { currentUser, logoutUser, isAuthLoading } = useAuth()

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setError('')
        const firebaseCategories = await getCategories()
        setCategories(firebaseCategories)
      } catch (loadError) {
        setCategories([])
        setError(loadError.message || 'No se pudieron cargar las categorias.')
      }
    }

    loadCategories()
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
        {error ? <p className="navbar-error-message">{error}</p> : null}
        <div className="navbar-account">
          {isAuthLoading ? <p className="navbar-user">Validando sesion...</p> : null}
          {!isAuthLoading && currentUser ? (
            <>
              <p className="navbar-user">{currentUser.email}</p>
              <button type="button" className="navbar-auth-button" onClick={logoutUser}>
                Cerrar sesion
              </button>
            </>
          ) : null}
          {!isAuthLoading && !currentUser ? (
            <Link className="navbar-auth-button" to="/login">
              Iniciar sesion
            </Link>
          ) : null}
        </div>
        <CartWidget />
      </div>
    </header>
  )
}

export default Navbar