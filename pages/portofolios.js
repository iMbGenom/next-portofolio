import React, { Component, Fragment } from 'react'
// import Link from 'next/link'
import { Link } from '../routes'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import BasePage from '../components/BasePage'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap'

class Portofolios extends Component {

    static async getInitialProps() {
        const getArticle = await axios.get('http://localhost:3001/v/1/content?CategoryId=1&Page=1&Type=article')
        return {
            articles: getArticle.data
        }
    }

    constructor(props) {
        super(props)
    }

    renderArticle(articles) {
        return articles.data.map((item, index) => {
            return (
                // <li key={index}>
                //     {/* {index}. {item.Title} */}
                //     {/* interpolate using backqual */}
                //     <Link route={`/portofolio/${item._id}`}>
                //     {/* <Link as={`/portofolio/${item._id}`} href={`/portofolio?id=${item._id}`}> */}
                //         <a style={{'fontSize': '20px'}}> {item.Title} </a>
                //     </Link>
                // </li>
                <Col md="4" key={index}>
                    <Fragment key={index}>
                        <span>
                        <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header"><small>author: </small>{item.CreatedBy}</CardHeader>
                            <CardBody>
                            <p className="portfolio-card-city">{item.Type}</p>
                            <CardTitle className="portfolio-card-title">{item.Title}</CardTitle>
                            <CardText className="portfolio-card-text">{item.Description}</CardText>
                            <div className="readMore"> </div>
                            </CardBody>
                        </Card>
                        </span>
                    </Fragment>
                </Col>
            )
        })
    }

    render() {
        const { articles } = this.props
        return (
            <BaseLayout>
                <BasePage className="portfolio-page" title="Portofolios">
                    {/* <h1> I am Portofolios Page </h1> */}
                    {/* <ul>
                        { this.renderArticle(articles) }
                    </ul> */}
                    <Row>
                        { this.renderArticle(articles) }
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default Portofolios
