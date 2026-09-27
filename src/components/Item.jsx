const Item = ({ item, onSelectProduct }) => {
  return (
    <article className="item-card">
      <img src={item.img} alt={item.name} />
      <div className="item-card-content">
        <h3>{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price}</p>
        <button type="button" className="item-detail-button" onClick={() => onSelectProduct(item.id)}>
          Ver detalle
        </button>
      </div>
    </article>
  )
}

export default Item