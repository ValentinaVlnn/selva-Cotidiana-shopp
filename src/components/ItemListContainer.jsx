import { useEffect, useState } from 'react'

import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getProducts()
      setItems(products)
    }

    loadProducts()
  }, [])

  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </main>
  )
}

export default ItemListContainer