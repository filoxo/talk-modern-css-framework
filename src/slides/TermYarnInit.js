import React from 'react'
import { Slide, Appear, List, ListItem } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <List ordered>
      <ListItem>Initialize</ListItem>
    </List>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> mkdir my-css && cd my-css
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> npm init -y
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <pre style={{ margin: 0 }}>
          <div>{`Wrote to ./package.json:`}</div>
          <div>{`{`}</div>
          <div>{`  "name": "my-css",`}</div>
          <div>{`  "version": "1.0.0",`}</div>
          <div>{`  ...`}</div>
          <div>{`  "main": "index.js",`}</div>
          <div>{`  "scripts": {`}</div>
          <div
          >{`    "test": "echo \\"Error: no test specified\\" && exit 1"`}</div>
          <div>{`  }`}</div>
          <div>{`}`}</div>
        </pre>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
