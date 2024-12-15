import Link from 'next/link'
import {Post} from './page'
import './post.css'

export default function PostItems({id, title, updated, created}: Post) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="item">
        <h2>{title}</h2>
        <span>생성일 : {created}</span>
        <span>수정일 : {updated}</span>
      </div>
    </Link>
  )
}
