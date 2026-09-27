import { useState } from 'react'

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count">
      <button type="button" onClick={handleSubtract}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleAdd}>
        +
      </button>
    </div>
  )
}

export default ItemCount