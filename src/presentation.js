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
  Text,
  Notes
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
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1.3} textColor="heading">Why?</Heading>
          <Notes>
            <p>
              I want to talk about what my motivations for this talk, for the most part these reasons are pretty timeless.
              <br/>
              Why should you ever build your own CSS framework?
              <br/>
              There are a lot of really good reasons actually.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} lineHeight={1.3} textColor="heading">
            Ideas
          </Heading>
          <List style={{ width: '50%', margin: '0 auto' }}>
            <ListItem>Grey-scale</ListItem>
            <ListItem>Themable</ListItem>
            <ListItem>
              <a href="https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939">
                Focus on Accessibility
              </a>
            </ListItem>
            <Notes>
              <p>Here are some ideas for you to go forth and try:</p>
              <ul>
                <li>A theme that uses only grey-scale colors</li>
                <li>
                  A framework that is themable using CSS custom properties
                </li>
                <li>Dive deep into enhancing accessibility with CSS</li>
              </ul>
            </Notes>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={2} textColor="highlight">
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
