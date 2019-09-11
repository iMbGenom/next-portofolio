import React, { Component } from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import SlateEditor from '../components/slate-editor/Editor'

class BlogEditor extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage className="blog-editor-page" title="Write Your Story..">
                    {/* <h1>I am About Page from Class Component</h1> */}
                    <SlateEditor />
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default BlogEditor