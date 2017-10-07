import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={1} lineHeight={1.3} textColor="highlight" fit>
      PostCSS + cssnext
    </Heading>
    <div style={{ textAlign: 'center', lineHeight: 1.8 }}>
      PostCSS = CSS + JS plugins
      <br />
      cssnext = Tomorrow’s CSS syntax today
    </div>
    <Notes>
      <p>
        PostCSS is a great tool that can replace the CSS preprocessing
        frameworks. The main reason why I prefer PostCSS is that it brings you
        closer to native CSS syntax, but that's just personal preference. The
        most popular PostCSS plugin is Autoprefixer which adds all the necessary
        vendor prefixes using data from CanIUse. That alone is a great feature.
      </p>
      <p>
        Next we'll couple that with cssnext, a PostCSS plugin that allows you to
        use tomorrow's CSS syntax, today. Its sort of like Babel for JavaScript.
        This way you can use the newest language features with fallbacks or
        polyfills depending on your browser compatibility target. We'll be using
        some of these features today.
      </p>
    </Notes>
  </Slide>
)
