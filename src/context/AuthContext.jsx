import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { useEffect, useState } from 'react'

import AuthContext from './authContext'
import { auth } from '../firebase/config'

const mapAuthUser = (user) => {
  if (!user) {
    return null
  }

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || '',
  }
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(mapAuthUser(user))
      setIsAuthLoading(false)
    })

    return unsubscribe
  }, [])

  const registerUser = async (fullName, email, password) => {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)

    if (fullName.trim()) {
      await updateProfile(credentials.user, {
        displayName: fullName.trim(),
      })
    }

    const mappedUser = mapAuthUser(credentials.user)
    setCurrentUser(mappedUser)

    return mappedUser
  }

  const loginUser = async (email, password) => {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    const mappedUser = mapAuthUser(credentials.user)
    setCurrentUser(mappedUser)

    return mappedUser
  }

  const logoutUser = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthLoading,
        isAuthenticated: Boolean(currentUser),
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}