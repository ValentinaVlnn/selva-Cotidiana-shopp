import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <article className="item-card">
      <img src={item.img} alt={item.name} />
      <div className="item-card-content">
        <h3>{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price}</p>
        <Link className="item-detail-button" to={`/item/${item.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default Item