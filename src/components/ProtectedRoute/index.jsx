import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '../../context/useAuth'

const ProtectedRoute = () => {
  const { currentUser, isAuthLoading } = useAuth()
  const location = useLocation()

  if (isAuthLoading) {
    return (
      <section className="auth-page">
        <div className="auth-card">
          <p className="auth-loading-message">Validando tu sesion...</p>
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
          message: 'Debes iniciar sesion para acceder al checkout.',
        }}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute