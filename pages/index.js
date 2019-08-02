import React, { Component } from 'react'
// import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import SUperComponent from '../components/SuperComponent'
import axios from 'axios'
import { Button, Container } from 'reactstrap'

class Human {
    talk() {
        console.log('I am talking')
    }

    static walk() {
        console.log('I am walking')
    }
}

const human = new Human()

class Index extends SUperComponent {

    static async getInitialProps() {
        const getArticle = await axios.get('http://localhost:3001/v/1/content?CategoryId=1&Page=1&Type=article')
        console.log(getArticle.data)
        console.log('I am getInitialProps') // 1st output in client and server
        return {
            initialData: [1, 2, 3, 4],
            articles: getArticle.data
        }
    }

    constructor(props) {
        // debugger // dpt mengambil function alertName (this.alertName) pada SuperComponent, sdngkn this.someVariable undefined
        super(props)
        // debugger // dpt mengambil smua nya di SuperComponent yang setelah super

        this.state = {
            title: 'I am index page'
        }
        console.log('constructor') // 2nd output in client and server
        // this.updateTitle = this.updateTitle.bind(this) // callback and arrow function 2nd options
    }

    componentDidMount() {
        console.log('componentDidMount')
        human.talk() // call function
        Human.walk() // call static function
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // callback and arrow function 1st options
    updateTitle() {
        // debugger
        // console.log('I am update title')
        // callback and arrow function 1st options
        this.setState({
            title: 'I am updated index page with function'
        })
    }

    // callback and arrow function 3rd options
    // updateTitle = () => {
    //     this.setState({
    //         title: 'I am updated index page with function'
    //     })
    // }

    renderArticle(articles) {
        return articles.data.map((item, i) => {
            return (
                <h2 key={i}>{i}. {item.Title}</h2>
            )
        })
    }

    render() {
        // console.log('render')
        // debugger
        const { title } = this.state // destructurizing
        // const title = this.state.title // same like above
        // const initialData = this.props.initialData
        const { initialData, articles } = this.props
        console.log(articles)

        return (
            /** USING JS */
            <BaseLayout>
                <Container>
                    <Button color="danger">Danger!</Button>
                </Container>
                <h1>I am Index Page from Class Component</h1>

                {/* USING JSX */}
                {/* // React.createElement(
                //     "h1",
                //     { className: "title" },
                //     "I am Index Page from Class Component Created By React.createElement"
                // ) */}
                {/* props */}
                {/* <Header title={'I am a header component'}>
                    <h1> I am header subtitle </h1>
                </Header> */}
                <h2> {title} </h2>
                { this.renderArticle(articles) }

                {/* add event handle onclick */}
                {/* <button onClick={ () => {this.setState({title: 'I am updated index page'})}}> Change Title </button> */}
                {/* using function */}
                {/* callback and arrow function 2nd & 3rd options */}
                {/* <button onClick={this.updateTitle}> Change Title </button> */}
                {/* callback and arrow function 1st options */}
                {/* <button onClick={ () => this.updateTitle()}> Change Title </button> */}
            </BaseLayout>
        )
    }
}
  
export default Index
