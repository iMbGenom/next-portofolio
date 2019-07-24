import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

class Portofolio extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am Portofolio Page with param: {this.props.router.query.title}</h1>
            </BaseLayout>
        )
    }
}
  
export default withRouter(Portofolio)
