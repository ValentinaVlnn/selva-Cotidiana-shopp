import Item from '../Item'

const ItemList = ({ items }) => {
  return (
    <section className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  )
}

export default ItemList