import { Value } from 'slate'

export const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [{
          object: 'text',
          text: 'A line of text in a paragraph.'
        }]
      }
    ]
  }
})