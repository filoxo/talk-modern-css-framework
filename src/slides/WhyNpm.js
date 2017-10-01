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
      <ListItem>Abstracted configuration</ListItem>
    </List>
    <Notes>
      <p>
        So why use npm scripts as the build tool? If you're not familiar with
        npm, it is the largest software registry and isn't limited to
        JavaScript. On your machine, it will help you manage your projects
        dependencies (like Bower), define executable scripts (like Grunt and
        Gulp), and manage settings and metadata.
      </p>
      <p>
        Using npm has simplified my development process because it replaces 2
        other tools. That means less things to install and configure. npm's
        ubiquity is also a plus.
      </p>
    </Notes>
  </Slide>
)
