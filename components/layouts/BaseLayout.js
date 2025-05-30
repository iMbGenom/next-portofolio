import React, { Fragment } from 'react'
import Header from '../shared/Header'
import Head from 'next/head'

const BaseLayout = (props) => {
    const { className, children, title, cannonical } = props
    const headerType = props.headerType || 'default'

    return (
        <Fragment>
            <Head>
                <title>Ulasan Gue - {title}</title>
                <meta name="description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way." />
                <meta name="keywords" content="jerga portfolio, jerga developer, jerga freelancig, jerga programming"/>
                <meta property="og:title" content="Filip Jerga - programmer, developer, bloger" />
                <meta property="og:locale" content="en_EU" />
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer."/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
                <script src="https://kit.fontawesome.com/380d351f8f.js"></script>
            </Head>
            <div className="layout-container">
                {/* { headerType === 'index' && <Header className="port-nav-index" />} */}
                {/* { headerType === 'default' && <Header className="port-nav-default" />} */}
                <Header className={`port-nav-${headerType}`} isSiteOwner="admin"/>
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