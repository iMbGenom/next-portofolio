import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class About extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage className="about-page">
                    <h1>I am About Page from Class Component</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default About
