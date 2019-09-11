import React, { Component, Fragment } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import ControlMenu from './ControlMenu'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})

// Define a React component renderer for our code blocks.
function CodeNode(props) {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

// Define our app...
class SlateEditor extends Component {
    // Set the initial value when the app is first constructed.
    state = {
        value: initialValue,
        isLoaded: false
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }
  
    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
        this.setState({
            value
        })
    }

    // Define a new handler which prints the key that was pressed.
    onKeyDown = (event, editor, next) => {
        // // Return with no changes if the keypress is not '&'
        // if (event.key !== '&') return next()

        // // Prevent the ampersand character from being inserted.
        // event.preventDefault()

        // // Change the value by inserting 'and' at the cursor's position.
        // editor.insertText('and')
        // return true
        if (event.key != '`' || !event.ctrlKey) return next()

        event.preventDefault()

        // Determine whether any of the currently selected blocks are code blocks.
        const isCode = editor.value.blocks.some(block => block.type == 'code')

        // Toggle the block type depending on `isCode`.
        editor.setBlocks(isCode ? 'paragraph' : 'code')
    }

    // Add a `renderBlock` method to render a `CodeNode` for code blocks.
    renderNode = (props, editor, next) => {
        switch (props.node.type) {
        case 'code':
            return <CodeNode {...props} />
        case 'paragraph':
            return <p {...props.attributes}>{props.children}</p>
        default:
            return next()
        }
    }

    getTitle() {
        const { value } = this.state
        const firstBlock = value.document.getBlocks().get(0)
        const secondBlock = value.document.getBlocks().get(1)
        const thirdBlock = value.document.getBlocks().get(2)
        const Title = firstBlock && firstBlock.text ? firstBlock.text : 'Untitled'
        const SubTitle = secondBlock && secondBlock.text ? secondBlock.text : 'Unsubtitled'
        const Text = thirdBlock && thirdBlock.text ? thirdBlock.text : 'Untexted'

        return {
            Title,
            SubTitle,
            Text
        }
    }

    save() {
        const { save, isLoading } = this.props
        const headingValues = this.getTitle()
        const text = headingValues.text

        !isLoading && save(text, headingValues)
    }
  
    // Render the editor.
    render() {
        const { isLoaded } = this.state // formalitas karena ada error kalo ga pake ini
        const { isLoading } = this.props // untuk button saving
        return (
            <Fragment>
                <ControlMenu isLoading={isLoading} save={() => this.save()}></ControlMenu>
                {/* <pre><code>haha hihi</code></pre> */}
                { isLoaded &&
                    <Editor
                        {...this.props}
                        value={this.state.value}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                        renderNode={this.renderNode}
                    />
                }
            </Fragment>
        )
    }
}

export default SlateEditor