import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const accent = 'emerald'

export default function ProductDetail() {
  const { id } = useParams()

  const product = {
    id,
    name: `Apex Runner ${id}`,
    price: 189,
    description:
      'A precision-engineered running shoe with breathable knit, responsive cushioning, and all-day comfort.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291025-0d6f3beafe0d?q=80&w=1600&auto=format&fit=crop',
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="grid gap-4">
          {product.images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={product.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-xl border border-gray-200 shadow-sm"
            />
          ))}
        </div>
        <div>
          <motion.h1 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold tracking-tight">
            {product.name}
          </motion.h1>
          <div className={`mt-2 text-2xl font-semibold text-${accent}-600`}>${product.price}</div>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6 grid grid-cols-4 gap-3">
            {['US 7','US 8','US 9','US 10'].map(s => (
              <button key={s} className="px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300">{s}</button>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button className={`flex-1 inline-flex justify-center items-center px-5 py-3 rounded-md bg-${accent}-600 hover:bg-${accent}-700 text-white transition-colors`}>
              Add to Cart
            </button>
            <Link to="/cart" className="px-5 py-3 rounded-md border border-gray-200 hover:bg-gray-50">View Cart</Link>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold mb-3">Details</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Breathable knit upper</li>
              <li>Responsive cushioning</li>
              <li>Durable rubber outsole</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
