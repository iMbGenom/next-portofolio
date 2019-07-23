import React, { Component } from 'react'
import Header from '../components/shared/Header'

class Index extends Component {
    render() {
        return (
            /** USING JS */
            <div>
                <h1>I am Index Page from Class Component</h1>
                {/* USING JSX */}
                {/* // React.createElement(
                //     "h1",
                //     { className: "title" },
                //     "I am Index Page from Class Component Created By React.createElement"
                // ) */}
                {/* props */}
                <Header title={'I am a header component'}>
                    <h1> I am header subtitle </h1>
                </Header>
            </div>
        )
    }
}
  
export default Index
