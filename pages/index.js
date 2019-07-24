import React, { Component } from 'react'
// import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import SUperComponent from '../components/SuperComponent'

class Index extends SUperComponent {

    constructor(props) {
        // debugger // dpt mengambil function alertName (this.alertName) pada SuperComponent, sdngkn this.someVariable undefined
        super(props)
        // debugger // dpt mengambil smua nya di SuperComponent yang setelah super

        this.state = {
            title: 'I am index page'
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle() {
        debugger
        this.setState({
            title: 'I am updated index page with function'
        })
    }

    render() {
        // console.log('render')
        debugger
        const { title } = this.state // destructurizing
        // const title = this.state.title // same like above

        return (
            /** USING JS */
            <BaseLayout>
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
                <h2> {this.state.title} </h2>

                {/* add event handle onclick */}
                {/* <button onClick={ () => {this.setState({title: 'I am updated index page'})}}> Change Title </button> */}
                {/* using function */}
                <button onClick={ () => this.updateTitle()}> Change Title </button>
            </BaseLayout>
        )
    }
}
  
export default Index
