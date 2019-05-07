import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <ul>
      <li><Link as='/react-post' href='/post?title=React'><a>react</a></Link></li>
      <li><Link href='/post?title=Angular'><a>angular</a></Link></li>
      <li><Link href='/post?title=Vue'><a>vue</a></Link></li>
    </ul>
  );
}

Blog.getInitialProps = (ctx) => {
  return {title: 'My Blog'}
}

export default Blog