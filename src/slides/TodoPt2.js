import React from 'react'
import { Slide, List, ListItem, CodePane, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={7}>
        <ListItem>
          Create <Code>index.html</Code>
        </ListItem>
        <ListItem>Populate with content</ListItem>
      </List>
      <CodePane
        fit
        lang="html"
        className="language-html"
        style={{ fontSize: '3.5vmin' }}
      >
        {`...
<link rel="stylesheet" href="dist/main.min.css">
...   
<section>
  <h2>Buttons</h2>
  <div>
    <button class="primary" type="button">Primary</button>
    <button class="secondary" type="button">Secondary</button>
  </div>
</section>`}
      </CodePane>
    </div>
  </Slide>
)
