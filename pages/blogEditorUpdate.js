import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import SlateEditor from '../components/slate-editor/Editor'
import { getContentById } from '../actions'

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
    }

    render() {
        const { blog } = this.props
        const { isSaving } = this.state
        const Body = blog.data[0].Body
        // console.log(blog.data[0].Body)

        return (
            <BaseLayout>
                <BasePage className="blog-editor-page">
                    <SlateEditor initialValue={Body} isLoading={isSaving} save={ console.log('here should be update') }/>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default BlogEditorUpdate