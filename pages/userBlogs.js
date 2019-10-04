import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Container, Row, Col } from 'reactstrap'

import { getContentByUser } from '../actions/index'
import { Link } from '../routes'

class UserBlogs extends Component {
    static async getInitialProps({ req }) {
        // console.log(req)
        let blogs = []
        const CreatedBy = 'radili'
        try {
            blogs = await getContentByUser(CreatedBy)
        } catch (error) {
            console.log(error)
        }
        // console.log(blogs)
        return { blogs }
    }

    separatedBlogs(blogs) {
        const published = []
        const draft = []

        blogs.forEach((blog) => {
            blog.Status === 2 ? draft.push(blog) : published.push(blog)
        })

        return {
            published,
            draft
        }
    }

    renderBlogs(blogs) {
        // console.log(blogs)
        return (
            <ul className="user-blogs-list">
                {
                    blogs.map((item, index, array) => (
                        // console.log(item._id)
                            <li key={index}>
                                <Link route={`/blogs/${item._id}/edit`}>
                                    <a>{item.Title}</a>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }

    render() {
        const { blogs } = this.props
        const { published, draft } = this.separatedBlogs(blogs.data)
        // console.log(draft)
        return (
            <BaseLayout headerType={'landing'}>
                <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
                    <div className="overlay"></div>
                    <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Fresh Blogs</h1>
                            <span className="subheading">Programming, travelling...</span>
                        </div>
                        </div>
                    </div>
                    </Container>
                </div>
                <BasePage className="blog-user-page">
                    <Row>
                        <Col md="6" className="mx-auto text-center">
                            <h2 className="blog-status-title">Published Blogs</h2>
                            {this.renderBlogs(published)}
                        </Col>
                        <Col md="6" className="mx-auto text-center">
                            <h2 className="blog-status-title">Drafted</h2>
                            {this.renderBlogs(draft)}
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default UserBlogs
