import React from 'react'

const Hireme = () => {
  return (
    <p>contact me by <a href='mailto:idward@vip.sina.com'>presonal email</a></p>
  )
}

Hireme.getInitialProps = (ctx) => {
  return {title: 'Hire Me'}
}

export default Hireme