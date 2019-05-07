import App, {Container} from 'next/app'
import {withRouter} from 'next/router'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import Layout from "../component/Layout"
import makeStore from '../store'
import Error from './_error'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return {pageProps}
  }

  render() {
    const {Component, router, store, pageProps} = this.props
    const {title = '', statusCode = false} = pageProps
    if(statusCode) {
      return <Error statusCode={statusCode}/>
    }
    return (
      <Container>
        <Provider store={store}>
          <Layout title={title}>
            <Component router={router} {...pageProps}/>
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(withRouter(MyApp))