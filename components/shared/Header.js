import React, { Component, Fragment } from 'react'
import Link from 'next/link'
// style using scss
import '../../styles/main.scss'

class Header extends Component {
  render() {
    const title = this.props.title
    return (
      <Fragment>
        <p>{title}</p>
        {this.props.children}
        <p className='customClass'> I am styled P element </p>
        <p className='customClassFromFile'> I am styled P element </p>
        <Link href="/">
          {/* style using inline */}
          <a style={{'fontSize': '20px'}}> Homepage </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/portofolios">
          <a> Portofolio </a>
        </Link>
        <Link href="/blogs">
          <a> Blog </a>
        </Link>
        <Link href="/cv">
          <a> CV </a>
        </Link>
        {/* style using jsx */}
        <style jsx>
          {`
            a {
              font-size: 20px;
            };
            .customClass {
              color: red;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Header