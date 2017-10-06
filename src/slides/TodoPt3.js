import React from 'react'
import { Slide, List, ListItem, CodePane, Appear } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={7}>
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
}`}
      </CodePane>
      <List ordered style={{ textAlign: 'left', marginTop: 0 }} start={8}>
        <ListItem>Start the server</ListItem>
      </List>
      <SimpleTerminal>
        <Appear transitionDuration={0}>
          <div>
            <span style={{ opacity: 0.6 }}>$</span> npm run build:watch
          </div>
        </Appear>
        <Appear transitionDuration={0}>
          <div>
            <div>> test-css@1.0.0 build /Users/cfiloteo/dev/test-css</div>
            <div>
              > postcss 'src/main.css' -o 'dist/main.css' -u postcss-cssnext
              "-w"
            </div>
            <div style={{ color: '#21D726' }}>
              ✔ Finished src/main.css (123 ms)
            </div>
            <div style={{ color: '#6EC9FD' }}>Waiting for file changes...</div>
          </div>
        </Appear>
      </SimpleTerminal>
    </div>
  </Slide>
)
