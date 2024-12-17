const getPost = async (postId: string) => {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    {next: {revalidate: 10}},
  )
  if (!response.ok) {
    throw new Error('getPost error')
  }
  const data = await response.json()
  return data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostDetailPage({params}: any) {
  const {id} = await params
  const post = await getPost(id)
  return (
    <div>
      <h1>post/{post.id}</h1>
      <h3>{post.title}</h3>
      <p>{post.created}</p>
    </div>
  )
}
