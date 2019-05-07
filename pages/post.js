import React from 'react';

const Post = () => {
  return (
    <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
      venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque
      ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Curabitur blandit tempus
      porttitor. Maecenas faucibus mollis interdum.</p>
  )
}

Post.getInitialProps = ({query}) => {
  return {title: query.title}
}

export default Post;