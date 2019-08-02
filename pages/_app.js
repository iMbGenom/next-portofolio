import React from 'react'
import App, { Container } from 'next/app'

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss' // our font css will override bootstrap in above line

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
  
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
  
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp