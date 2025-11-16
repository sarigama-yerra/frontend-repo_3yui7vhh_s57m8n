import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const accent = 'emerald'

const products = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  name: `Apex Runner ${i + 1}`,
  price: 189 + (i % 3) * 10,
  category: i % 2 ? 'Women' : 'Men',
  image: 'https://images.unsplash.com/photo-1753800487227-ea7582de9a9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGV4JTIwUnVubmVyJTIwMXxlbnwwfDB8fHwxNzYzMzA0MTM3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
}))

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
          <p className="text-gray-600">Minimalist, premium silhouettes for any occasion.</p>
        </div>
        <div className="flex gap-3">
          <select className="px-3 py-2 border border-gray-200 rounded-md bg-white">
            <option>Sort: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <select className="px-3 py-2 border border-gray-200 rounded-md bg-white">
            <option>Filter: All</option>
            <option>Men</option>
            <option>Women</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map(p => (
          <motion.div key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <Link to={`/product/${p.id}`}>
              <img src={p.image} alt={p.name} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </Link>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link to={`/product/${p.id}`} className="font-semibold hover:underline">{p.name}</Link>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>
                <div className={`font-semibold text-${accent}-600`}>${p.price}</div>
              </div>
              <button className={`mt-4 w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-gray-50 hover:bg-${accent}-50 text-gray-800 border border-gray-200 transition-colors`}>Quick add</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
