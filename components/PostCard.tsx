import { Post } from '@/lib/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-all flex flex-col">
      {post.image_url && (
        <div className="h-48 w-full overflow-hidden bg-gray-100">
          <img
            className="w-full h-full object-cover"
            src={post.image_url}
            alt={post.title}
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-gray-400 mb-2">
          {new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {post.title}
        </h3>
        {post.profiles && (
          <p className="text-sm text-gray-500 mb-3">
            By {post.profiles.email || 'Anonymous'}
          </p>
        )}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {post.content.substring(0, 200)}...
        </p>
      </div>
    </div>
  )
}
