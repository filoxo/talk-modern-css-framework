import React from 'react'
import { Slide, Heading, List, ListItem, CodePane, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <Heading size={3} textColor="highlight">
        TODO, pt. 4
      </Heading>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }}>
        <ListItem>Add script to watch for changes</ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"scripts": {
    ...
    "build:watch": "npm run build -- -w",
    ...            
}`}
      </CodePane>
      <List ordered style={{ textAlign: 'left', marginTop: 0 }} start={2}>
        <ListItem>Start the server</ListItem>
      </List>
    </div>
  </Slide>
)
