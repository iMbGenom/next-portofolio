import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import SlateEditor from '../components/slate-editor/Editor'
import { fakeSave } from '../actions'

class BlogEditor extends Component {
    constructor(props) {
        super()

        this.state = {
            isSaving: false
        }

        this.saveBlog = this.saveBlog.bind(this)
    }

    saveBlog(heading) {
        const blog = {}
        blog.Title = heading.Title
        blog.SubTitle = heading.SubTitle
        this.setState({
            isSaving: true
        })
        fakeSave(heading).then(data => {
            this.setState({
                isSaving: false
            })
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { isSaving } = this.state
        return (
            <BaseLayout>
                <BasePage className="blog-editor-page">
                {/* <BasePage className="blog-editor-page" title="Write Your Story.."> */}
                    {/* <h1>I am About Page from Class Component</h1> */}
                    <SlateEditor isLoading={isSaving} save={this.saveBlog}/>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default BlogEditor