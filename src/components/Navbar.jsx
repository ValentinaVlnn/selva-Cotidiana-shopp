import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-brand">Selva Cotidiana Shop</h1>
      <div className="navbar-menu">
        <nav className="navbar-categories">
          <a href="#">Plantas de interior</a>
          <a href="#">Cactus</a>
          <a href="#">Macetas</a>
        </nav>
        <CartWidget />
      </div>
    </header>
  )
}

export default Navbar