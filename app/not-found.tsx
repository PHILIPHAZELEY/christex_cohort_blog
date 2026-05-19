'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="text-lg text-gray-600 mt-2">Page not found</p>
        <Link href="/" className="text-indigo-600 hover:text-indigo-500 mt-4 block">
          Back to home
        </Link>
      </div>
    </div>
  )
}