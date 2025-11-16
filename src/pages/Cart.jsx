import React from 'react'
import { Link } from 'react-router-dom'

const accent = 'emerald'

export default function Cart() {
  const items = [
    { id: 1, name: 'Apex Runner 1', price: 189, qty: 1, image: 'https://images.unsplash.com/photo-1753800487227-ea7582de9a9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGV4JTIwUnVubmVyJTIwMXxlbnwwfDB8fHwxNzYzMzA0MTM3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]
  const subtotal = items.reduce((a, b) => a + b.price * b.qty, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
              <img src={item.image} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">Size US 9</div>
                <div className={`font-semibold text-${accent}-600`}>${item.price}</div>
              </div>
              <input type="number" min="1" defaultValue={item.qty} className="w-16 px-2 py-1 border border-gray-200 rounded-md" />
            </div>
          ))}
        </div>
        <div className="p-6 border border-gray-200 rounded-xl h-fit">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className={`font-semibold text-${accent}-700`}>${subtotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className={`mt-6 inline-flex w-full justify-center px-5 py-3 rounded-md bg-${accent}-600 hover:bg-${accent}-700 text-white transition-colors`}>Checkout</Link>
          <Link to="/products" className="mt-3 inline-flex w-full justify-center px-5 py-3 rounded-md border border-gray-200 hover:bg-gray-50">Continue shopping</Link>
        </div>
      </div>
    </div>
  )
}
