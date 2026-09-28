import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { categories, getProducts } from '../../mock/asyncMock'
import ItemList from '../ItemList'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()
  const location = useLocation()
  const currentCategory = categories.find((category) => category.id === categoryId)
  const redirectMessage = location.state?.message

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)

      const products = await getProducts()

      if (categoryId) {
        setItems(products.filter((product) => product.categoryId === categoryId))
      } else {
        setItems(products)
      }

      setIsLoading(false)
    }

    loadProducts()
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