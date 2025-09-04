import { useState } from 'react'
import './Post.css'

interface PostProps {
  id: number
  title: string
  imageUrl: string
  createdAt: string
  readTime: string
  text: string,
  key?: number
}

export const Post = (propsPost: { post: PostProps }) => {
  const [post] = useState(propsPost.post)


  return (
    <div className="post">
      <div className="post-img">
        <img src={post.imageUrl} alt={post.title} />
      </div>
      <div className="post-meta">
        <span className="post-date">{post.createdAt} </span>
        <span className="post-read-time">{post.readTime}</span>
      </div>
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-excerpt">{post.text}</div>
      </div>
    </div>
  )
}
