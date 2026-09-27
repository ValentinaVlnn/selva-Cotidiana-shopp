import Item from './Item'

const ItemList = ({ items, onSelectProduct }) => {
  return (
    <section className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onSelectProduct={onSelectProduct} />
      ))}
    </section>
  )
}

export default ItemList