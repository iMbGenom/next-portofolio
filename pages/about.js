import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'

class About extends Component {
    render() {
        return (
            <BaseLayout>
                <h1>I am About Page from Class Component</h1>
                <Header />
            </BaseLayout>
        )
    }
}
  
export default About
