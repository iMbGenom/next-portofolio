import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import SlateEditor from '../components/slate-editor/Editor'
import { updateContent, getContentById } from '../actions'
import { toast } from 'react-toastify'

class BlogEditorUpdate extends Component {
    static async getInitialProps({ query }) {
        let blog = {}
        const blogId = query.id

        try {
            blog = await getContentById(blogId)
        } catch (err) {
            console.log(err)
        }

        return { blog }
    }

    constructor(props) {
        super(props)

        this.state = { isSaving: false }

        this.updateBlog = this.updateBlog.bind(this)
    }

    updateBlog(text, heading) {
        const { blog } = this.props
        const data = blog.data[0]
        // const updatedBlog = {}
        // data.Title = heading.Title
        // data.SubTitle = heading.SubTitle
        // data.Body = text
        data.UpdatedAt = new Date(data.UpdatedAt).getTime()

        this.setState({ isSaving: true })
        // console.log(data)
        updateContent(data).then(data => {
            toast.success('Successfully')
            this.setState({ isSaving: false })
            console.log(data)
            // Router.pushRoute(`/blogs/${data.data._id}/edit`)
        }).catch((err) => {
            toast.error(err.message)
            this.setState({ isSaving: false })
            // console.log(err)
        })
    }

    render() {
        const { blog } = this.props
        const { isSaving } = this.state
        const Body = blog.data[0].Body
        // console.log(blog.data[0].Body)

        return (
            <BaseLayout>
                <BasePage className="blog-editor-page">
                    <SlateEditor initialValue={Body} isLoading={isSaving} save={this.updateBlog}/>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default BlogEditorUpdate