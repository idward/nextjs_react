import React from 'react'

const Home = () => {
  return (
      <div>
        <p>Welcome to home page</p>
      </div>
  )
}

Home.getInitialProps = (ctx) => {
  return {title:'Home'}
}

export default Home;