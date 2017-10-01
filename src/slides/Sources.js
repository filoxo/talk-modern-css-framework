import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} textColor="heading">
      Sources
    </Heading>
    <List>
      <ListItem>
        <a href="https://filoxo.github.io/posts/build-a-css-framework-using-npm/">
          Build a CSS framework using npm
        </a>
      </ListItem>
      <ListItem>
        <a href="https://github.com/postcss/postcss">PostCSS</a>
      </ListItem>
      <ListItem>
        <a href="https://jonathantneal.github.io/css-db/">cssdb</a>
      </ListItem>
    </List>
  </Slide>
)
