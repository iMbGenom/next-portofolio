import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortofolioCreateForm from '../components/portofolios/PortofolioCreateForm'
import { Row, Col } from 'reactstrap'
import { createContent } from '../actions'

class PortofolioNew extends Component {

    constructor(props) {
        super()

        this.state = {
            error: undefined
        }

        this.savePortofolio = this.savePortofolio.bind(this)
    }

    savePortofolio(portofolioData) {
        // alert(JSON.stringify(portofolioData, null, 2))
        createContent(portofolioData).then((content) => {
            // console.log(content)
            this.setState({
                error: undefined
            })
        }).catch((err) => {
            this.setState({
                error: err.message
                // error: err.response.data.message
            })
            // console.error(err)
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
                            <PortofolioCreateForm error={error} onSubmit={this.savePortofolio} />
                            {/* <PortofolioCreateForm onClick={(someVariable) => { console.log(someVariable) }} /> */}
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default PortofolioNew
