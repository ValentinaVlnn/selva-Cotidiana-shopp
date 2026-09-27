import { useEffect, useState } from 'react'

import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting, onSelectProduct }) => {
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
      {items.length === 0 ? <p className="loading-message">Cargando productos...</p> : null}
      <ItemList items={items} onSelectProduct={onSelectProduct} />
    </main>
  )
}

export default ItemListContainer