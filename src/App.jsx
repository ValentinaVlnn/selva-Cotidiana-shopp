import { Route, Routes } from 'react-router-dom'

import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer greeting="La selva en tu hogar" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="La selva en tu hogar" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
