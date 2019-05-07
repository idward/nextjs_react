import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

class About extends Component {
  static async getInitialProps(ctx) {
    const response = await fetch('https://api.github.com/users/reedbarger')
    const statusCode = response.status > 200 ? response.status : false
    const data = statusCode ? {} : await response.json()
    return {user: data, statusCode, title: 'About'}
  }

  render() {
    const {user} = this.props
    return (
      <div>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed"/>
      </div>
    )
  }
}

export default About;