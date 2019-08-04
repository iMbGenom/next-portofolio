import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortofolioCreateForm from '../components/portofolios/PortofolioCreateForm'

class PortofolioNew extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage className="portofolio-create-page" title="Create New Portofolio">
                    {/* <h1>I am PortofolioNew Page from Class Component</h1> */}
                    <PortofolioCreateForm />
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default PortofolioNew
