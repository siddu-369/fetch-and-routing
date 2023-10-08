// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs/')
    const data = await response.json()
    console.log(data)
    const modifiedData = data.map(each => ({
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      id: each.id,
      author: each.author,
    }))
    console.log(modifiedData)
    this.setState({blogsData: modifiedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <ul className="blogs-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(each => <BlogItem key={each.id} data={each} />)
        )}
      </ul>
    )
  }
}

export default BlogList
