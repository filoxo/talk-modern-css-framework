// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Notes,
  Appear,
  Code,
  CodePane
} from 'spectacle'
import SimpleTerminal from './SimpleTerminal'

// Import theme
import createTheme from 'spectacle-theme-nova/bundle'
import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import 'spectacle-theme-nova/syntax/prism.nova.css'
import './style.css'

const theme = createTheme(null, {
  global: {
    body: {
      fontSize: '2em'
    }
  },
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
            <Text>Performance</Text>
          </Appear>
          <Appear>
            <Text>Maintainability & Enhancements</Text>
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
                need to support? Does it pass all accessibility checks? By
                creating your own, you're making these decisions rather than
                accepting them from elsewhere.
              </li>
              <li>
                Page sizes are getting bigger in the overall. Size is one aspect
                to performance, but also realize that after downloading, the
                browser needs to parse, evaluate, and render all the styles.
                Maybe you don't need to load a complex UI library and roll your
                own instead.
              </li>
              <li>
                Have any of you wanted to extend or maybe just tweak a few
                things a large CSS framework like Bootstrap, Foundation, or
                jQuery UI? Forking is an option, but maybe so it creating your
                own.
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={2} textColor="heading">
            So why npm scripts?
          </Heading>
          <List style={{ width: '50%', margin: '0 auto' }}>
            <ListItem>Small tasks</ListItem>
            <ListItem>Composability</ListItem>
            <ListItem>Abstracted configuration</ListItem>
          </List>
          <Notes>
            <p>
              So why use npm scripts as the build tool? If you're not familiar
              with npm, it is the largest software registry and isn't limited to
              JavaScript. On your machine, it will help you manage your projects
              dependencies (like Bower), define executable scripts (like Grunt
              and Gulp), and manage settings and metadata.
            </p>
            <p>
              Using npm has simplified my development process because it
              replaces 2 other tools. That means less things to install and
              configure. npm's ubiquity is also a plus.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <SimpleTerminal>
            <Appear transitionDuration={0}>
              <div>» yarn init -y</div>
            </Appear>
            <Appear transitionDuration={0}>
              <div>
                <div>
                  <span style={{ color: '#33B969' }}>success</span> Saved
                  package.json
                </div>
                <div>
                  <span role="img" aria-label="stars emoji">
                    ✨
                  </span>{' '}
                  Done in 0.04s.
                </div>
              </div>
            </Appear>
            <Appear transitionDuration={0}>
              <div>» yarn add postcss-cli postcss-cssnext</div>
            </Appear>
            <Appear transitionDuration={0}>
              <div>
                <div>
                  [1/4]{' '}
                  <span role="img" aria-label="search emoji">
                    🔍
                  </span>{' '}
                  Resolving packages...
                </div>
                <div>
                  [2/4]{' '}
                  <span role="img" aria-label="truck emoji">
                    🚚
                  </span>{' '}
                  Fetching packages...
                </div>
                <div>
                  [3/4]{' '}
                  <span role="img" aria-label="link emoji">
                    🔗
                  </span>{' '}
                  Linking dependencies...
                </div>
                <div>
                  [4/4]{' '}
                  <span role="img" aria-label="document emoji">
                    📃
                  </span>{' '}
                  Building fresh packages...
                </div>
                <div>
                  <span role="img" aria-label="stars emoji">
                    ✨
                  </span>{' '}
                  Done in 13.86s.
                </div>
              </div>
            </Appear>
          </SimpleTerminal>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} lineHeight={1.3} textColor="highlight" fit>
            PostCSS + CSSNext
          </Heading>
          <div style={{ textAlign: 'center', lineHeight: 1.8 }}>
            PostCSS = CSS + JS plugins
            <br />
            CSSNext = Tomorrow’s CSS syntax today
          </div>
          <Notes>
            <p>
              PostCSS is a great tool that can replace the CSS preprocessing
              frameworks. The main reason why I prefer PostCSS is that it brings
              you closer to native CSS syntax, but that's just personal
              preference. The most popular PostCSS plugin is Autoprefixer which
              adds all the necessary vendor prefixes using data from CanIUse.
              That alone is a great feature.
            </p>
            <p>
              Next we'll couple that with CSSNext, a PostCSS plugin that allows
              you to use tomorrow's CSS syntax, today. Its sort of like Babel
              for JavaScript. This way you can use the newest language features
              with fallbacks or polyfills depending on your browser
              compatibility target. We'll be using some of these features today.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="highlight">
            Next
          </Heading>
          <ol style={{ textAlign: 'left' }}>
            <li>
              Create <Code>src</Code> directory
            </li>
            <li>
              Create <Code>main.css</Code> file in <Code>src</Code>
            </li>
            <li>Add npm script to run postcss (in package.json)</li>
          </ol>
          <CodePane lang="json" className="language-json">
            {`"scripts": {
  "build": "postcss 'src/main.css' 
              -o 'dist/main.min.css' 
              -use ['postcss-cssnext']"
}`}
          </CodePane>
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
            <ListItem>CSS-in-JS</ListItem>
            <ListItem>
              <a href="https://www.youtube.com/watch?time_continue=2&v=JiXTVRXP_z0">
                Build uselessware
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
          </List>
        </Slide>
      </Deck>
    )
  }
}
