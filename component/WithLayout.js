import Head from 'next/head'
import Link from 'next/link'

export default (Page) => {
  return () => {
    return (
      <div className='root'>
        <Head>
          <title>NextPortfolio</title>
        </Head>
        <header>
          <Link href='/'><a>Home</a></Link>
          <Link href='/about'><a>About</a></Link>
          <Link href='/blog'><a>Blog</a></Link>
          <Link as='/h' href='/hireme'><a>Hire Me</a></Link>
        </header>
        {/*<h1>{props.title}</h1>*/}
        <Page/>
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