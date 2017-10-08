import React from 'react'
import { Slide, Heading, List, ListItem, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} textColor="heading">
      So why npm scripts?
    </Heading>
    <List style={{ width: '50%', margin: '0 auto' }}>
      <ListItem>Single responsibility</ListItem>
      <ListItem>Composability</ListItem>
      <ListItem>Shareability</ListItem>
    </List>
    <Notes>
      <p>
        So why use npm scripts as the build tool? npm scripts if well written
        can be ideal for creating small tasks that have a single responsibility.
        You can define that one thing you want it to do well.
      </p>
      <p>
        That then makes for easier composability. Given tasks A, B, and C, you
        can easily have task D that runs all of them.
      </p>
      <p>
        npm scripts are so commonly used that npm the tool has shortcuts for
        them, which in turn means that there is a shared standard to get started
        with npm projects. This means that I can reasonably expect to clone a
        project, npm install, then run `npm start`, and have a working
        development setup. Its awesome!
      </p>
    </Notes>
  </Slide>
)
