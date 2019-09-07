import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortofolioCreateForm from '../components/portofolios/PortofolioCreateForm'
import { Row, Col } from 'reactstrap'
import { updateContent, getContentById } from '../actions'
import { Router } from '../routes'

class PortofolioEdit extends Component {

    static async getInitialProps({ query }) {
        let content = {}
        try {
            content = await getContentById(query.id)
        } catch (error) {
            console.error(error)
        }
        // console.log(content)
        return { content }
    }

    constructor(props) {
        super()

        this.state = {
            error: undefined
        }

        this.updatePortofolio = this.updatePortofolio.bind(this)
    }

    updatePortofolio(portofolioData, { setSubmitting }) {
        console.log('click button')
        portofolioData.CreatedAt = new Date(portofolioData.CreatedAt).getTime()
        portofolioData.UpdatedAt = new Date(portofolioData.UpdatedAt).getTime()
        // const d = new Date(portofolioData.CreatedAt).getTime()
        // console.log(d)
        setSubmitting(true)

        updateContent(portofolioData).then((content) => {
            console.log(content)
            setSubmitting(false)
            this.setState({
                error: undefined
            })
            Router.pushRoute('/portofolios')
        }).catch((err) => {
            console.log(err)
            setSubmitting(false)
            const error = err.message || 'Server Error'
            this.setState({
                error: error
            })
        })
    }

    render() {
        const { error } = this.state
        const { content } = this.props
        const title = `Update Portofolio ${content.data[0]._id}`
        // console.log(content)
        return (
            <BaseLayout>
                <BasePage className="portofolio-create-page" title={title}>
                    <Row>
                        <Col md="6">
                            {/* <h1>I am PortofolioNew Page from Class Component</h1> */}
                            <PortofolioCreateForm
                                initialValues={content.data[0]}
                                error={error}
                                onSubmit={this.updatePortofolio} />
                            {/* <PortofolioCreateForm onClick={(someVariable) => { console.log(someVariable) }} /> */}
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default PortofolioEdit