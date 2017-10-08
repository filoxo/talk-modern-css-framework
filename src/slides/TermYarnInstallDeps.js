import React from 'react'
import { Slide, Appear, List, ListItem, Notes } from 'spectacle'
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
      <Notes>
        <p>
          Next we'll use the `npm install` command to add some dependencies to
          our project. Dependencies are those packages that our project will
          always require to be installed in order to create a production build
          of our code. The basic `npm install` command will write these
          dependencies to the package.json file so that this relationship is
          maintained.
        </p>
        <p>
          Here I'm telling npm to install `postcss-cli` and `postcss-cssnext`.
          These will now be available to use in our npm scripts.
        </p>
      </Notes>
    </SimpleTerminal>
  </Slide>
)
