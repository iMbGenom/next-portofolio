import React, { Component, Fragment } from 'react'
import { Editor } from 'slate-react'
import { initialValue } from './initial-value'
import ControlMenu from './ControlMenu'
import { Value } from 'slate'

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
        value: Value.create(),
        isLoaded: false
    }

    componentDidMount() {
        const value = this.props.initialValue ? Value.fromJSON(initialValue) : Value.fromJSON(initialValue)

        this.updateMenu()
        this.setState({
            isLoaded: true,
            value
        })
    }

    componentDidUpdate = () => {
        this.updateMenu()
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

        this.save()
        next()
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

    updateMenu = () => {
        const menu = this.menu
        if (!menu) return
    
        const { value } = this.state
        const { fragment, selection } = value
    
        if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
          menu.removeAttribute('style')
          return
        }
    
        const native = window.getSelection()
        const range = native.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        menu.style.opacity = 1
        menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`
    
        menu.style.left = `${rect.left +
          window.pageXOffset -
          menu.offsetWidth / 2 +
          rect.width / 2}px`
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
        const text = headingValues.Text

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