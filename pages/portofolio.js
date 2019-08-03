import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios'
import BasePage from '../components/BasePage'

class Portofolio extends Component {

    static async getInitialProps({ query }) {
        console.log(query)
        const portofolioId = query.id
        let portofolio = {}

        try {
            const response = await axios.get('http://localhost:3001/v/1/content?_id=' + portofolioId)
            portofolio = response.data
        } catch (err) {
            console.log(err)
        }

        return {
            portofolio
        }
    }

    render() {
        const { portofolio } = this.props

        return (
            <BaseLayout>
                <BasePage>
                    <h1>I am Portofolio Page with param:</h1>
                    {/* <h2>{this.props.router.query.id}</h2> */}
                    <h1> {portofolio.data[0].Slug} </h1>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default withRouter(Portofolio)
