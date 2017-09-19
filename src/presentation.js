// Import React
import React from "react";

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
} from "spectacle";

// Import theme
import createTheme from 'spectacle-theme-nova/bundle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import 'spectacle-theme-nova/syntax/prism.nova.css';

const theme = createTheme(null, {
  progress: {
    bar: {
      container: {
        position: 'absolute',
        height: '6px',
        width: '100%',
        bottom: 0,
        left: 0,
        transition: 'all .8s ease-in-out 0.2s',
        zIndex: 1000
      },
      bar: {
        height: '100%',
        background: '#7bc2ca',
        transition: 'all 0.3s ease-out'
      }
    }
  }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["fade"]} bgColor="primary">
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
        <Slide transition={["fade"]}>
        </Slide>
        <Slide transition={["fade"]}>
        </Slide>
      </Deck>
    );
  }
}