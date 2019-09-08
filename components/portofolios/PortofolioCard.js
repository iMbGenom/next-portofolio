import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import PortofolioCardDetail from './PortofolioCardDetail'

class PortofolioCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    const { content, children } = this.props

    return (
      // <Fragment key={index}>
        <span>
          <PortofolioCardDetail />
          <Card className="portfolio-card">
              <CardHeader onClick={() => Router.pushRoute(`/user/${content.CreatedBy}`)} className="portfolio-card-header"><small>@</small>{content.CreatedBy}</CardHeader>
              <CardBody>
              <p className="portfolio-card-city">{content.Type}</p>
              <CardTitle onClick={() => Router.pushRoute(`/portofolio/${content._id}`)} className="portfolio-card-title">{content.Title}</CardTitle>
              <CardText className="portfolio-card-text">{content.Description}</CardText>
              <div className="readMore">
                {children}
              </div>
              </CardBody>
              {
                <Fragment>
                    <Button onClick={() => Router.pushRoute(`/portofolio/${content._id}/edit`)} color="secondary">Update</Button>
                    <Button onClick={() => this.displayDeleteWarning(content)} color="info">Delete</Button>
                </Fragment>
              }
          </Card>
        </span>
    // </Fragment>
    )
  }
}

export default PortofolioCard