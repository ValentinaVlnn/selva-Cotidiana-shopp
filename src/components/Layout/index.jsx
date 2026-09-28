import { Outlet } from 'react-router-dom'

import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout