import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortofolioCreateForm from '../components/portofolios/PortofolioCreateForm'
import { Row, Col } from 'reactstrap'
import { createContent, getContentById } from '../actions'
import { Router } from '../routes'

class PortofolioEdit extends Component {

    static async getInitialProps({ query }) {
        let content = {}
        try {
            content = await getContentById(query.id)
        } catch (error) {
            console.error(error)
        }
        console.log(content)
        return {
            content
        }
    }

    constructor(props) {
        super()

        this.state = {
            error: undefined
        }

        this.savePortofolio = this.savePortofolio.bind(this)
    }

    savePortofolio(portofolioData, {setSubmitting}) {
        // alert(JSON.stringify(portofolioData, null, 2))
        // setSubmitting(true)
        // createContent(portofolioData).then((content) => {
        //     setSubmitting(false)
        //     this.setState({
        //         error: undefined
        //     })
        //     Router.pushRoute('/portofolios')
        // }).catch((err) => {
        //     setSubmitting(false)
        //     const error = err.message || 'Server Error'
        //     this.setState({
        //         error: error
        //     })
        // })
    }

    render() {
        const { error } = this.state
        return (
            <BaseLayout>
                <BasePage className="portofolio-create-page" title="Create New Portofolio">
                    <Row>
                        <Col md="6">
                            {/* <h1>I am PortofolioNew Page from Class Component</h1> */}
                            <PortofolioCreateForm error={error} onSubmit={this.savePortofolio} />
                            {/* <PortofolioCreateForm onClick={(someVariable) => { console.log(someVariable) }} /> */}
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default PortofolioEdit