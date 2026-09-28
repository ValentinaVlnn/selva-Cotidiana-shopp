const ItemCount = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="item-count-wrapper">
      <p className="item-count-title">Cantidad a agregar</p>
      <div className="item-count">
        <button type="button" onClick={onDecrement}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCount