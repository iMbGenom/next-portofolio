import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Container, Row, Col } from 'reactstrap'
import { Link } from '../routes'
import moment from 'moment'
import { getContents } from '../actions'

function shortenText(text, maxLength = 5) {
    if (text && text.length > maxLength) {
        return `${text.substring(0, maxLength)} ...`
    }

    return text
}

class Blogs extends Component {
    static async getInitialProps() {
        let blogs = []

        try {
            blogs = await getContents()
        } catch (error) {
            console.log(error)
        }

        return { blogs }
    }

    renderBlogs = (blogs) => (
        blogs.map((blog, index) => (
            <div key={index} className="post-preview">
                <Link route={`/blog/${blog.Slug}`}>
                <a>
                    <h2 className="post-title">
                    {blog.Title}
                    </h2>
                    <h3 className="post-subtitle">
                    {shortenText(blog.SubTitle)}
                    </h3>
                </a>
                </Link>
                <p className="post-meta">Posted by
                    <a href="#"> {blog.CreatedBy} </a> {moment(blog.CreatedAt).format('LLLL')}
                </p>
            </div>
            )
        )
    )

    render() {
        const { blogs } = this.props
        // console.log(blogs)
        return (
            <BaseLayout headerType={'landing'} className="blog-listing-page">
                <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
                    <div className="overlay"></div>
                    <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Blogs Dashboard</h1>
                            <span className="subheading">Let's Write SOme Nice Blog Today</span>
                        </div>
                        </div>
                    </div>
                    </Container>
                </div>
                <BasePage className="blog-body">
                    <Row>
                    <Col md="10" lg="8" className="mx-auto">
                        {
                        this.renderBlogs(blogs.data)
                        }
                        <div className="clearfix">
                        <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                        </div>
                    </Col>
                    </Row>

                    <footer>
                    <Container>
                        <Row>
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; Filip Jerga 2018</p>
                        </div>
                        </Row>
                    </Container>
                    </footer>
                </BasePage>
            </BaseLayout>

        )
    }
}
  
export default Blogs
