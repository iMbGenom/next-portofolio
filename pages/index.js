import React, { Component } from 'react'

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
                <a href="/"> Homepage </a>
                <a href="/about"> About </a>
                <a href="/portofolios"> Portofolio </a>
                <a href="/blogs"> Blog </a>
                <a href="/cv"> CV </a>
            </div>
        )
    }
}
  
export default Index
