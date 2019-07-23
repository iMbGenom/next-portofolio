import React, { Component, Fragment } from 'react'
import Link from 'next/link'

class Header extends Component {
    render() {
        const title = this.props.title
        return (
            <Fragment>
                <p>{title}</p>
                {this.props.children}
                <Link href="/">
                    <a> Homepage </a>
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
            </Fragment>
        )
    }
}

export default Header