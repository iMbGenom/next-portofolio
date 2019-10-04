import React, { Component, Fragment } from 'react'
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import PortofolioCardDetail from './PortofolioCardDetail'
import { Router } from '../../routes'

class PortofolioCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.handleToggle = this.handleToggle.bind(this)
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

  handleToggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { content, children } = this.props
    const { isOpen } = this.state

    return (
      // <Fragment key={index}>
        <span onClick={this.handleToggle}>
          <PortofolioCardDetail toggle={this.handleToggle} content={content} isOpen={isOpen}/>
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
                    <Button onClick={(e) => this.displayDeleteWarning(content, e)} color="info">Delete</Button>
                </Fragment>
              }
          </Card>
        </span>
    // </Fragment>
    )
  }
}

export default PortofolioCard