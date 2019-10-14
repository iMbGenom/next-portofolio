import React, { Component, Fragment } from 'react'
// import Link from 'next/link'
import { Link } from '../routes'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import PortofolioCard from '../components/portofolios/PortofolioCard'

import { Router } from '../routes'

import { getContents, deleteContent } from '../actions'
import AlertNotif from '../components/shared/AlertNotif';

class Portofolios extends Component {

    static async getInitialProps({ req }) {
        // let getArticle = []
        // try {
        //     getArticle = await axios.get('http://localhost:3001/v/1/content?CategoryId=1&Page=1&Type=article')
        // } catch (error) {
        //     console.log('server error')
        // }
        // return {
        //     articles: getArticle.data
        // }
        let contents = []

        try {
            contents = await getContents(req)
        } catch (error) {
            console.log(error)
        }

        return { contents }
    }

    navigateToEdit(content, e) {
        e.stopPropagation()
        Router.pushRoute(`/portofolio/${content._id}/edit`)
    }

    constructor(props) {
        super(props)
    }

    displayDeleteWarning(content, e) {
        e.stopPropagation()
        // window.confirm('Are you sure?')
        const isConfirm = confirm(`Are you sure delete ${content.Title}?`)

        if (isConfirm) {
            // delete here
            this.delete(content)
        }
    }

    delete(content) {
        deleteContent(content)
        .then(() => {
            // decide what todo next
            Router.pushRoute('/portofolios')
        })
        .catch(err => console.error(err))
    }

    renderContents(contents) {
        return contents.data.map((content, index) => {
            return (
                // <li key={index}>
                //     {/* {index}. {content.Title} */}
                //     {/* interpolate using backqual */}
                //     <Link route={`/portofolio/${content._id}`}>
                //     {/* <Link as={`/portofolio/${content._id}`} href={`/portofolio?id=${content._id}`}> */}
                //         <a style={{'fontSize': '20px'}}> {content.Title} </a>
                //     </Link>
                // </li>
                <Col md="4" key={index}>
                    <PortofolioCard content={content}>
                        {
                        <Fragment>
                            <Button
                                // onClick={() => Router.pushRoute(`/portofolio/${content._id}/edit`)}
                                onClick={(e) => this.navigateToEdit(content, e)}
                                color="light"
                            >
                                Update
                            </Button> {' '}
                            <Button onClick={(e) => this.displayDeleteWarning(content, e)} color="success">Delete</Button>
                        </Fragment>
                        }
                    </PortofolioCard>
                </Col>
            )
        })
    }

    render() {
        const { contents } = this.props
        return (
            <BaseLayout title="Portofolios">
                <BasePage className="portfolio-page" title="Portofolios">
                    <Button
                        onClick={() => Router.pushRoute('/portofolioNew')}
                        className="create-btn"
                        color="success"
                    >
                        Create
                    </Button>
                    {/* <h1> I am Portofolios Page </h1> */}
                    {/* <ul>
                        { this.renderArticle(articles) }
                    </ul> */}
                    <Row>
                        { this.renderContents(contents) }
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default Portofolios