import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/useAuth'

const initialForm = {
  fullName: '',
  email: '',
  password: '',
}

const getAuthErrorMessage = (errorCode, isRegisterMode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Ya existe una cuenta registrada con ese email.'
    case 'auth/invalid-email':
      return 'El email ingresado no es valido.'
    case 'auth/user-not-found':
    case 'auth/invalid-credential':
      return 'Credenciales incorrectas. Verifica tu email y contrasena.'
    case 'auth/weak-password':
      return 'La contrasena debe tener al menos 6 caracteres.'
    case 'auth/too-many-requests':
      return 'Se bloquearon temporalmente los intentos. Intenta nuevamente mas tarde.'
    default:
      return isRegisterMode
        ? 'No se pudo crear la cuenta. Intenta nuevamente.'
        : 'No se pudo iniciar sesion. Intenta nuevamente.'
  }
}

const Auth = () => {
  const { loginUser, registerUser, isAuthLoading } = useAuth()
  const [form, setForm] = useState(initialForm)
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const redirectPath = location.state?.from?.pathname || '/checkout'
  const redirectMessage = location.state?.message

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

    try {
      if (isRegisterMode) {
        await registerUser(form.fullName, form.email, form.password)
      } else {
        await loginUser(form.email, form.password)
      }

      navigate(redirectPath, {
        replace: true,
        state: {
          message: isRegisterMode
            ? 'Cuenta creada correctamente. Ya puedes finalizar tu compra.'
            : 'Sesion iniciada correctamente.',
        },
      })
    } catch (authError) {
      setError(getAuthErrorMessage(authError.code, isRegisterMode))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="auth-eyebrow">Cuenta</p>
        <h2>{isRegisterMode ? 'Crear cuenta' : 'Iniciar sesion'}</h2>
        <p className="auth-description">
          {isRegisterMode
            ? 'Registrate con email y contrasena para poder continuar con el checkout.'
            : 'Ingresa con tu cuenta para acceder al checkout y confirmar tu compra.'}
        </p>

        {redirectMessage ? <p className="auth-feedback-message">{redirectMessage}</p> : null}
        {error ? <p className="auth-error-message">{error}</p> : null}
        {isAuthLoading ? <p className="auth-loading-message">Validando sesion actual...</p> : null}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegisterMode ? (
            <>
              <label htmlFor="fullName">Nombre</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
                required={isRegisterMode}
              />
            </>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Contrasena</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            autoComplete={isRegisterMode ? 'new-password' : 'current-password'}
            minLength={6}
            required
          />

          <button type="submit" className="auth-submit-button" disabled={isSubmitting || isAuthLoading}>
            {isSubmitting
              ? isRegisterMode
                ? 'Creando cuenta...'
                : 'Ingresando...'
              : isRegisterMode
                ? 'Crear cuenta'
                : 'Ingresar'}
          </button>
        </form>

        <button
          type="button"
          className="auth-toggle-button"
          onClick={() => {
            setIsRegisterMode((currentMode) => !currentMode)
            setForm(initialForm)
            setError('')
          }}
        >
          {isRegisterMode
            ? 'Ya tienes cuenta? Inicia sesion'
            : 'No tienes cuenta? Registrate'}
        </button>

        <Link className="auth-back-link" to="/">
          Volver al catalogo
        </Link>
      </div>
    </section>
  )
}

export default Auth