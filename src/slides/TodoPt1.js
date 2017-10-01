import React from 'react'
import { Slide, Heading, List, ListItem, CodePane, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <Heading size={3} textColor="highlight">
        TODO, pt. 1
      </Heading>
      <List ordered style={{ textAlign: 'left' }}>
        <ListItem>
          Create <Code>src</Code> directory
        </ListItem>
        <ListItem>
          Create <Code>main.css</Code> file in <Code>src</Code>
        </ListItem>
        <ListItem>Add npm script to run postcss (in package.json)</ListItem>
      </List>
      <CodePane fit lang="json" className="language-json">
        {`"scripts": {
  "build": "postcss 'src/main.css' 
              -o 'dist/main.min.css' 
              --use postcss-cssnext"
}`}
      </CodePane>
      <List ordered start={4}>
        <ListItem>
          Open up <Code>main.css</Code> and write
        </ListItem>
      </List>
    </div>
  </Slide>
)
