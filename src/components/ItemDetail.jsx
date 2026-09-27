import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  return (
    <article className="item-detail">
      <div className="item-detail-image">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="item-detail-content">
        <h2>{product.name}</h2>
        <p className="item-detail-category">{product.category}</p>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-stock">Stock disponible: {product.stock}</p>
        <ItemCount stock={product.stock} />
      </div>
    </article>
  )
}

export default ItemDetail