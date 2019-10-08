import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Row, Col } from 'reactstrap'

import { getContentBySlug } from '../actions'

class BlogDetail extends Component {
    static async getInitialProps({ query }) {
        // console.log(query)
        let blog = {}
        const slug = query.slug

        try {
            blog = await getContentBySlug(slug)
        } catch (error) {
            console.log(error)
        }

        return { blog }
    }

    render() {
        const { blog } = this.props
        return (
            <BaseLayout>
                <BasePage className="blog-detail-page">
                    {/* <h1>I am About Page from Class Component</h1> */}
                    <Row>
                        <Col md={{ size: 8, offset: 2 }}>
                            <div dangerouslySetInnerHTML={{__html: blog.data[0].Body}}></div>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default BlogDetail
