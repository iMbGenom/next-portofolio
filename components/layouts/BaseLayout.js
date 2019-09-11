import React, { Fragment } from 'react'
import Header from '../shared/Header'
import Head from 'next/head'

const BaseLayout = (props) => {
    const { className, children } = props
    const headerType = props.headerType || 'default'

    return (
        <Fragment>
            <Head>
                <title>Ulasan Gue</title>
                <script src="https://kit.fontawesome.com/380d351f8f.js"></script>
            </Head>
            <div className="layout-container">
                {/* { headerType === 'index' && <Header className="port-nav-index" />} */}
                {/* { headerType === 'default' && <Header className="port-nav-default" />} */}
                <Header className={`port-nav-${headerType}`} />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                    {children}
                    </div>
                </main>
            </div>
        </Fragment>
    )

    // return (
    //     <Fragment>
    //         <Header />
    //         {props.children}
    //     </Fragment>
    // )
}

export default BaseLayout