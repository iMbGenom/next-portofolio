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
            return { blog }
        } catch (err) {
            return { err }
        }
    }

    constructor(props) {
        super(props)

        this.state = { isSaving: false }
    }

    render() {
        const { blog } = this.props
        const { isSaving } = this.state
        console.log(blog)

        return (
            <BaseLayout>
                <BasePage className="blog-editor-page">
                    <SlateEditor isLoading={isSaving} save={ console.log('here should be update') }/>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default BlogEditorUpdate