// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle-theme-nova/bundle'
import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import 'spectacle-theme-nova/syntax/prism.nova.css'
import './style.css'

const theme = createTheme(null)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1.3} textColor="heading">
            Building a CSS pipeline using npm
          </Heading>
          <Text margin="10px 0 0" size={2} fit>
            Create your own CSS framework today
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} lineHeight={1.3} textColor="heading">
            Why?
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} lineHeight={1.3} textColor="heading">
            Ideas
          </Heading>
          <List>
            <ListItem>asdf</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} />
      </Deck>
    )
  }
}
