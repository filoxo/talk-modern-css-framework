import React from 'react'
import { Slide, Appear, List, ListItem, Notes } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <List ordered start={8}>
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
    <Notes>
      I've talked about installing dependencies that our project requires in
      order to create a production build. We can also save dependencies to be
      used during development with a `--save-dev` flag. In our case, we'll be
      installing `npm-run-all` which allows us to run multiple tasks in
      parallel; and `lr-http-server` which is a lightweight server that
      automatically injects the page with new assets as they change. Of course,
      if you are familiar with other tools that do the same feel free to plug
      those in instead. I chose these two because of their simplicity.
    </Notes>
  </Slide>
)
