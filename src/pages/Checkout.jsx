import React from 'react'

const accent = 'emerald'

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <form className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="font-semibold mb-3">Shipping address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="First name" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="Last name" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="Address" className="sm:col-span-2 px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="City" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="Postal code" className="px-3 py-2 border border-gray-200 rounded-md" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-3">Payment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Card number" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="Name on card" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="Expiry (MM/YY)" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="CVC" className="px-3 py-2 border border-gray-200 rounded-md" />
            </div>
          </div>
          <button className={`w-full sm:w-auto inline-flex justify-center px-6 py-3 rounded-md bg-${accent}-600 hover:bg-${accent}-700 text-white`}>Pay now</button>
        </form>

        <div className="p-6 border border-gray-200 rounded-xl h-fit">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>$189.00</span></div>
            <div className="flex items-center justify-between"><span>Shipping</span><span>$8.00</span></div>
            <div className="flex items-center justify-between"><span>Tax</span><span>$18.90</span></div>
          </div>
          <div className="mt-4 flex items-center justify-between font-semibold">
            <span>Total</span>
            <span className={`text-${accent}-700`}>$215.90</span>
          </div>
        </div>
      </div>
    </div>
  )
}
