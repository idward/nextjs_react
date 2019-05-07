import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

class Layout extends React.Component {
  componentDidMount() {
    Router.beforePopState(({url, as, options}) => {
      // I only want to allow these two routes!
      if (url !== '/' || url !== '/other') {
        // Have SSR render bad routes as a 404.
        window.location.href = url;
        return false;
      }

      return true;
    });
  }

  render() {
    const {title, children} = this.props

    return (
      <div className='root'>
        <header>
          <Link href='/'><a>Home</a></Link>
          <Link href='/about'><a>About</a></Link>
          <Link href='/blog'><a>Blog</a></Link>
          <Link href='/hireme'><a>Hire Me</a></Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>cookmedical.com &copy; {new Date().getFullYear()}</footer>
        <style jsx>
          {`
            .root {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            header {
              width: 100%;
              display: flex;
              justify-content: space-around;
              padding: 1em;
              font-size: 1.2rem;
              background: indigo;
            }

            header a {
              color: darkgrey;
              text-decoration: none;
            }

            header a:hover {
              color: lightgrey;
              font-weight: bold;
            }

            footer {
              padding: 1em;
            }
          `
          }
        </style>
        <style global jsx>
          {`
          body {
            margin: 0;
            padding: 0;
            font-size: 110%;
            background: #f0f0f0;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Layout;