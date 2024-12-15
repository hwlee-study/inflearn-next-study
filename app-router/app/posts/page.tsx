// 'use client'

import CreatePost from './CreatePost'
import PostItems from './PostItems'
import './post.css'

export interface Post {
  collectionId: string
  collectionName: string
  created: string
  id: string
  title: string
  updated: string
}

const getPosts = async () => {
  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/posts/records',
    {cache: 'no-store'},
  )
  const data = await response.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.items as Post[]
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PostsPage() {
  const posts = (await getPosts()) as Post[]

  return (
    <div>
      <h1>Posts</h1>
      <div className="items">
        {posts.map((post: Post) => (
          <PostItems key={post.id} {...post} />
        ))}
      </div>
      <CreatePost />
    </div>
  )
}
