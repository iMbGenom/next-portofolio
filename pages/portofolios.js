import React, { Component } from 'react'
// import Link from 'next/link'
import { Link } from '../routes'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

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
        return articles.data.map((item, i) => {
            return (
                <li key={i}>
                    {/* {i}. {item.Title} */}
                    {/* interpolate using backqual */}
                    <Link route={`/portofolio/${item._id}`}>
                    {/* <Link as={`/portofolio/${item._id}`} href={`/portofolio?id=${item._id}`}> */}
                        <a style={{'fontSize': '20px'}}> {item.Title} </a>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const { articles } = this.props
        return (
            <BaseLayout>
                <h1> I am Portofolios Page </h1>
                <ul>
                    { this.renderArticle(articles) }
                </ul>
            </BaseLayout>
        )
    }
}
  
export default Portofolios
