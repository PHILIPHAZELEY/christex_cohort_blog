import Link from 'next/link'
import { createServerSupabaseClient } from '@/lib/supabase'
import PostCard from '@/components/PostCard'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = await createServerSupabaseClient()

  const { data: posts } = await supabase
    .from('posts')
    .select(`
      *,
      profiles (email)
    `)
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Christex Foundation
              <span className="block text-indigo-200">Cohort Blog</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-100 sm:text-xl">
              Share knowledge, experiences, and insights with our cohort community.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/create-post"
                className="px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-all"
              >
                Create Post
              </Link>
              <Link
                href="/signup"
                className="px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">All Posts</h2>

          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No posts yet</h3>
              <p className="mt-2 text-sm text-gray-500">Be the first to share something!</p>
              <Link href="/create-post" className="mt-6 inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                Create a Post
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
