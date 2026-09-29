import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getCategories, getProducts as getFirebaseProducts } from '../../firebase/bd'
import ItemList from '../ItemList'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()
  const location = useLocation()
  const currentCategory = categories.find((category) => category.id === categoryId)
  const redirectMessage = location.state?.message

  useEffect(() => {
    getCategories().then((firebaseCategories) => {
      setCategories(firebaseCategories)
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)

    getFirebaseProducts(categoryId)
      .then((products) => {
        setItems(products)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [categoryId])

  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      {redirectMessage ? <p className="route-feedback">{redirectMessage}</p> : null}
      {isLoading ? <p className="loading-message">Cargando productos...</p> : null}
      {!isLoading && items.length === 0 ? (
        <p className="empty-message">
          No encontramos productos en {currentCategory ? currentCategory.label : 'esta categoria'}.
        </p>
      ) : null}
      <ItemList items={items} />
    </main>
  )
}

export default ItemListContainer