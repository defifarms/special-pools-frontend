import React from 'react'
import ReactMarkdownLib, { ReactMarkdownOptions } from 'react-markdown'
import gfm from 'remark-gfm'

const ReactMarkdown: React.FC<ReactMarkdownOptions> = (props) => {
  return <ReactMarkdownLib  {...props} />
}

export default ReactMarkdown
