import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getCategories, getProducts as getFirebaseProducts } from '../../firebase/bd'
import ItemList from '../ItemList'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const { categoryId } = useParams()
  const location = useLocation()
  const currentCategory = categories.find((category) => category.id === categoryId)
  const redirectMessage = location.state?.message

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setError('')
        const firebaseCategories = await getCategories()
        setCategories(firebaseCategories)
      } catch (loadError) {
        setCategories([])
        setError(loadError.message || 'Ocurrio un error al cargar las categorias.')
      }
    }

    loadCategories()
  }, [])

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true)
        setError('')
        const products = await getFirebaseProducts(categoryId)
        setItems(products)
      } catch (loadError) {
        setItems([])
        setError(loadError.message || 'Ocurrio un error al cargar los productos.')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [categoryId])

  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      {redirectMessage ? <p className="route-feedback">{redirectMessage}</p> : null}
      {error ? <p className="async-error-message">{error}</p> : null}
      {isLoading ? <p className="loading-message">Cargando productos...</p> : null}
      {!isLoading && !error && items.length === 0 ? (
        <p className="empty-message">
          No encontramos productos en {currentCategory ? currentCategory.label : 'esta categoria'}.
        </p>
      ) : null}
      {!error ? <ItemList items={items} /> : null}
    </main>
  )
}

export default ItemListContainer