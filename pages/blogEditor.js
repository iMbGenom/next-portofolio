import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import SlateEditor from '../components/slate-editor/Editor'
import { fakeSave, createContent } from '../actions'
import { Router } from '../routes'
import { toast } from 'react-toastify'

class BlogEditor extends Component {
    constructor(props) {
        super()

        this.state = { isSaving: false }

        this.saveBlog = this.saveBlog.bind(this)
    }

    saveBlog(text, heading) {
        const blog = {}
        blog.Type = 'Blog'
        blog.Category = '2'
        blog.Title = heading.Title
        blog.SubTitle = heading.SubTitle
        blog.Body = text
        blog.Caption = 'Blog'
        blog.Description = 'Test Blog'
        blog.CreatedBy = 'Monkey D. Luffy'
        blog.UpdatedBy = 0,
        blog.CreatedAt = new Date()

        this.setState({ isSaving: true })

        // fakeSave(heading).then(data => {
        //     this.setState({
        //         isSaving: false
        //     })
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        createContent(blog).then(data => {
            toast.success('Successfully')
            this.setState({ isSaving: false })
            Router.pushRoute(`/blogs/${data.data._id}/edit`)
        }).catch((err) => {
            toast.error(err.message)
            this.setState({ isSaving: false })
            // console.log(err)
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