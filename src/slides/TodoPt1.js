import React from 'react'
import { Slide, Heading, List, ListItem, CodePane, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={3}>
        <ListItem>
          Create <Code>src</Code> directory
        </ListItem>
        <ListItem>
          Create <Code>main.css</Code> file in <Code>src</Code>
        </ListItem>
        <ListItem>Add npm script to run postcss (in package.json)</ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"scripts": {
  "build": "postcss 'src/main.css' 
              --output 'dist/main.css' 
              --use postcss-cssnext"
}`}
      </CodePane>
      <List ordered start={6} style={{ marginTop: 0 }}>
        <ListItem>
          Open up <Code>main.css</Code> and begin writing!
        </ListItem>
      </List>
    </div>
  </Slide>
)
