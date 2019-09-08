import React, { Component, Fragment } from 'react'
// import Link from 'next/link'
import { Link } from '../routes'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap'

import { Router } from '../routes'

import { getContents } from '../actions'

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

    constructor(props) {
        super(props)
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
                    <Fragment key={index}>
                        <span>
                        <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header"><small>author: </small>{content.CreatedBy}</CardHeader>
                            <CardBody>
                            <p className="portfolio-card-city">{content.Type}</p>
                            <CardTitle className="portfolio-card-title">{content.Title}</CardTitle>
                            <CardText className="portfolio-card-text">{content.Description}</CardText>
                            <div className="readMore">
                            {
                                <Fragment>
                                    <Button color="light">Update</Button> {' '}
                                    <Button color="success">Delete</Button>
                                </Fragment>
                            }
                            </div>
                            </CardBody>
                            {
                                <Fragment>
                                    <Button onClick={() => Router.pushRoute(`/portofolio/${content._id}/edit`)} color="secondary">Update</Button>
                                    <Button color="info">Delete</Button>
                                </Fragment>
                            }
                        </Card>
                        </span>
                    </Fragment>
                </Col>
            )
        })
    }

    render() {
        const { contents } = this.props
        return (
            <BaseLayout>
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