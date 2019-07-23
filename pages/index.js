import React, { Component } from 'react'
// import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'

class Index extends Component {
    render() {
        return (
            /** USING JS */
            <BaseLayout>
                <h1>I am Index Page from Class Component</h1>
                {/* USING JSX */}
                {/* // React.createElement(
                //     "h1",
                //     { className: "title" },
                //     "I am Index Page from Class Component Created By React.createElement"
                // ) */}
                {/* props */}
                {/* <Header title={'I am a header component'}>
                    <h1> I am header subtitle </h1>
                </Header> */}
            </BaseLayout>
        )
    }
}
  
export default Index
