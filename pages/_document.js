import Document, {Head, Main, NextScript} from 'next/document'
import Helmet from 'react-helmet'

class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = super.getInitialProps(...args)
    return {...documentProps, helmet: Helmet.renderStatic()}
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='a site for my programming portfilio'/>
        <meta name='robots' content='noindex nofollow'/>
        <link rel='stylesheet' type='text/css'
              href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'/>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      </Helmet>
    )
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents}>
      <Head>
        {this.helmetJsx}
        {this.helmetHeadComponents}
        <title>Welcome to SSR</title>
      </Head>
      <body {...this.helmetBodyAttrComponents}>
      <Main/>
      <NextScript/>
      <style global jsx>
        {`
              body {
                font-family: 'Roboto', sans-serif;
              }
            `}
      </style>
      </body>
      </html>
    )
  }
}

export default MyDocument