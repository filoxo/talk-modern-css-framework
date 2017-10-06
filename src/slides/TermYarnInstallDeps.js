import React from 'react'
import { Slide, Appear, List, ListItem } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <List ordered start={2}>
      <ListItem>Install dependencies</ListItem>
    </List>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> npm install postcss-cli
          postcss-cssnext
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>+ postcss-cssnext@3.0.2</div>
          <div>+ postcss-cli@4.1.1</div>
          <div>added 377 packages in 24.45s</div>
        </div>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
