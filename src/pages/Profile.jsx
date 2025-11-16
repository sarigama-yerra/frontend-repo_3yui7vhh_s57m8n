import React from 'react'

const accent = 'emerald'

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Your Account</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="border border-gray-200 rounded-xl p-6">
            <h2 className="font-semibold mb-4">Order history</h2>
            <div className="divide-y divide-gray-100">
              {[1,2].map(i => (
                <div key={i} className="py-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Order #{1000 + i}</div>
                    <div className="text-sm text-gray-500">Apex Runner • Qty 1 • $189</div>
                  </div>
                  <button className={`px-3 py-2 rounded-md border border-${accent}-600 text-${accent}-700 hover:bg-${accent}-50`}>View</button>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-gray-200 rounded-xl p-6">
            <h2 className="font-semibold mb-4">Addresses</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-medium">Home</div>
                <div className="text-sm text-gray-500">123 Modern Ave, Metropolis</div>
              </div>
              <button className={`px-4 py-3 rounded-lg border border-dashed border-${accent}-400 text-${accent}-600 hover:bg-${accent}-50`}>Add new</button>
            </div>
          </section>
        </div>
        <aside className="space-y-8">
          <section className="border border-gray-200 rounded-xl p-6">
            <h2 className="font-semibold mb-4">Profile</h2>
            <div className="grid gap-3">
              <input placeholder="Full name" className="px-3 py-2 border border-gray-200 rounded-md" />
              <input placeholder="Email" className="px-3 py-2 border border-gray-200 rounded-md" />
              <button className={`px-4 py-2 rounded-md bg-${accent}-600 hover:bg-${accent}-700 text-white`}>Save</button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
