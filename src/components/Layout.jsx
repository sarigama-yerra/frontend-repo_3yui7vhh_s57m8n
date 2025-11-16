import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, User, Menu, Search } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
  }`

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="font-extrabold tracking-tight text-xl">
              <span className="text-emerald-600">SOLE</span>STUDIO
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/products" className={navLinkClass}>Shop</NavLink>
              <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600">
                <Search size={18} />
                <span className="hidden md:block">Search</span>
              </button>
              <Link to="/cart" className="p-2 rounded-md hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 transition-colors">
                <ShoppingCart size={22} />
              </Link>
              <Link to="/login" className="p-2 rounded-md hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 transition-colors">
                <User size={22} />
              </Link>
              <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
                <Menu size={22} />
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden pb-4 animate-in">
              <nav className="grid gap-1">
                <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/products" className={navLinkClass} onClick={() => setOpen(false)}>Shop</NavLink>
                <NavLink to="/profile" className={navLinkClass} onClick={() => setOpen(false)}>Profile</NavLink>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 text-sm text-gray-500">
          <div>
            <div className="font-extrabold tracking-tight text-lg mb-2">
              <span className="text-emerald-600">SOLE</span>STUDIO
            </div>
            <p>Modern footwear for the discerning. Crafted with precision and designed for comfort.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold text-gray-700 mb-2">Shop</div>
              <ul className="space-y-2">
                <li><Link to="/products" className="hover:text-gray-800">New Arrivals</Link></li>
                <li><Link to="/products" className="hover:text-gray-800">Men</Link></li>
                <li><Link to="/products" className="hover:text-gray-800">Women</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Support</div>
              <ul className="space-y-2">
                <li><a className="hover:text-gray-800">Help Center</a></li>
                <li><a className="hover:text-gray-800">Shipping</a></li>
                <li><a className="hover:text-gray-800">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <p>© {new Date().getFullYear()} Solestudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
