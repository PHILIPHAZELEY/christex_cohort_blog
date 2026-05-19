import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Christex Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">Home</Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900">Sign In</Link>
            <Link href="/signup" className="text-sm text-gray-500 hover:text-gray-900">Sign Up</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
