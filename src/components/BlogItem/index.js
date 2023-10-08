// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {data} = this.props
    const {title, imageUrl, avatarUrl, topic, author, id} = data
    return (
      <Link to={`/blogs/${id}`}>
        <li className="list-container">
          <div className="image-container">
            <img src={imageUrl} alt={title} className="img" />
          </div>
          <div>
            <p className="grey-text">{topic}</p>
            <h1 className="title-text">{title}</h1>
            <div className="author-profile">
              <img src={avatarUrl} alt={author} className="author-image" />
              <p className="grey-text">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
