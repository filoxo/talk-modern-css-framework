// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck } from 'spectacle'
import Slides from './slides'

// Import theme
import createTheme from 'spectacle-theme-nova/bundle'
import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import 'spectacle-theme-nova/syntax/prism.nova.css'
import './style.css'

const theme = createTheme(null, {
  global: {
    body: {
      fontSize: '5vmin'
    },
    h1: {
      fontSize: '1em !important'
    }
  }
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme} progress="bar">
        {Slides}
      </Deck>
    )
  }
}
