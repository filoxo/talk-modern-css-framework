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
  Notes,
  Appear
} from 'spectacle'

// Import theme
import createTheme from 'spectacle-theme-nova/bundle'
import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import 'spectacle-theme-nova/syntax/prism.nova.css'
import './style.css'

const theme = createTheme(null, {
  components: {
    text: {
      fontSize: '2.6rem'
    }
  }
})

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
          <Appear>
            <Text>Your brand ≠ Bootstrap</Text>
          </Appear>
          <Appear>
            <Text>Decisions & Tradeoffs</Text>
          </Appear>
          <Appear>
            <Text>Size</Text>
          </Appear>
          <Notes>
            <p>
              I want to talk about what my motivations for this talk, for the
              most part these reasons are timeless.
              <br />
              Why should you ever build your own CSS framework? There are a lot
              of really good reasons actually.
            </p>
            <ul>
              <li>
                The first is your site's brand probably isn't exactly like
                someone else's. The visual design of everything included in a
                CSS framework is part of the image and experience you're giving
                to your sites' visitors.
              </li>
              <li>
                Not all frameworks are created equally. Every framework is a
                compilation of decisions and tradeoffs. What browsers do you
                need to support? Does it pass all accessibility checks?
              </li>
            </ul>
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
