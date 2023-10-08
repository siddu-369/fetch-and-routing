// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlog()
  }

  getBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const modifiedData = {
      title: data.title,
      author: data.author,
      content: data.content,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    console.log(modifiedData)
    this.setState({blogData: modifiedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {topic, title, author, content, imageUrl, avatarUrl} = blogData
    return (
      <div className="blog-container">
        <h1>{title}</h1>
        <div className="profile-container">
          <img className="profile" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader
            data-testid="loader"
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
