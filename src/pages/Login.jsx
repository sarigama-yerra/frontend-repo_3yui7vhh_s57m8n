import React from 'react'
import { Link } from 'react-router-dom'

const accent = 'emerald'

export default function Login() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-gray-600">Sign in to continue</p>
        </div>
        <form className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 mb-3 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <a className={`text-${accent}-600 text-sm`}>Forgot?</a>
          </div>
          <input type="password" className="mt-1 mb-4 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <button className={`w-full px-4 py-2 rounded-md bg-${accent}-600 hover:bg-${accent}-700 text-white transition-colors`}>Sign in</button>
          <p className="text-sm text-gray-600 mt-4 text-center">No account? <Link to="/register" className={`text-${accent}-600`}>Create one</Link></p>
        </form>
      </div>
    </div>
  )
}
