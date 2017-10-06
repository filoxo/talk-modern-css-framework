import React from 'react'
import { Slide, Appear, List, ListItem } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <List ordered start={9}>
      <ListItem>Install development dependencies</ListItem>
    </List>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> npm install --save-dev
          lr-http-server npm-run-all
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>+ npm-run-all@4.1.1</div>
          <div>+ lr-http-server@0.1.5</div>
          <div>added 89 packages in 10.444s</div>
        </div>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
