import React from 'react'
import { Slide, List, ListItem, CodePane, Notes, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={11}>
        <ListItem>
          Add prepublish script to <Code>package.json</Code>
        </ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"scripts": {
    ...
    "prepublishOnly": "npm run build"
}`}
      </CodePane>
      <Notes>
        <p>stuff</p>
      </Notes>
    </div>
  </Slide>
)
