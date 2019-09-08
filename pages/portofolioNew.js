import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortofolioCreateForm from '../components/portofolios/PortofolioCreateForm'
import { Row, Col } from 'reactstrap'
import { createContent } from '../actions'
import { Router } from '../routes'

const INITIAL_VALUES = {
    Type: '',
    CategoryId: '',
    Title: '',
    SubTitle: '',
    Body: '',
    Caption: '',
    Description: '',
    CreatedBy: '',
    CreatedAt: new Date(),
    UpdatedAt: new Date()
}

class PortofolioNew extends Component {

    constructor(props) {
        super()

        this.state = {
            error: undefined
        }

        this.savePortofolio = this.savePortofolio.bind(this)
    }

    savePortofolio(portofolioData, {setSubmitting}) {
        // alert(JSON.stringify(portofolioData, null, 2))
        setSubmitting(true)
        createContent(portofolioData).then((content) => {
            setSubmitting(false)
            this.setState({
                error: undefined
            })
            Router.pushRoute('/portofolios')
        }).catch((err) => {
            setSubmitting(false)
            const error = err.message || 'Server Error'
            this.setState({
                error: error
            })
        })
    }

    render() {
        const { error } = this.state
        return (
            <BaseLayout>
                <BasePage className="portofolio-create-page" title="Create New Portofolio">
                    <Row>
                        <Col md="6">
                            {/* <h1>I am PortofolioNew Page from Class Component</h1> */}
                            <PortofolioCreateForm
                                initialValues={INITIAL_VALUES}
                                error={error}
                                onSubmit={this.savePortofolio} />
                            {/* <PortofolioCreateForm onClick={(someVariable) => { console.log(someVariable) }} /> */}
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default PortofolioNew