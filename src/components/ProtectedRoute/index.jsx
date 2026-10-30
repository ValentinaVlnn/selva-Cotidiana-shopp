import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '../../context/useAuth'

const ProtectedRoute = () => {
  const { currentUser, isAuthLoading } = useAuth()
  const location = useLocation()

  if (isAuthLoading) {
    return (
      <section className="auth-page">
        <div className="auth-card">
          <p className="auth-loading-message">Validando tu sesión...</p>
        </div>
      </section>
    )
  }

  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
          message: 'Iniciá sesión para completar tu compra. Tu carrito se mantiene.',
        }}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute