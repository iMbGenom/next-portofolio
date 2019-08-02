import React, { Fragment } from 'react'
import Header from '../shared/Header'

const BaseLayout = (props) => {
    const { className, children } = props

    return (
        <div className="layout-container" >
            <Header />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                {children}
                </div>
            </main>
        </div>

    )

    // return (
    //     <Fragment>
    //         <Header />
    //         {props.children}
    //     </Fragment>
    // )
}

export default BaseLayout