import { useState } from 'react'

import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null)

  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting="La selva en tu hogar"
        onSelectProduct={setSelectedProductId}
      />
      <ItemDetailContainer productId={selectedProductId} />
    </>
  )
}

export default App
