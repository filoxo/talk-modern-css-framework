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
        PostCSS and cssnext are really only one block of the build stack that
        I've been talking about, but I'm going to focus on it quite a bit right
        now because togehter they enable all of the features that that I think
        are awesome.
      </p>
      <p>
        PostCSS is a JavaScript-based framework that will take your CSS and pipe
        it through whatever plugins you'd like. PostCSS can replace the CSS
        preprocessing language, bringing you closer to native CSS. The most
        popular PostCSS plugin is Autoprefixer–which you may have already heard
        of–which adds all the necessary vendor prefixes using data from CanIUse
        compatibility database. That alone is an amazingly useful feature.
      </p>
      <p>
        Couple that with cssnext, a PostCSS plugin that allows you to use
        tomorrow's CSS syntax, today. Its sort of like Babel for JavaScript.
        This way you can use the newest language features with fallbacks or
        prefixes depending on your browser compatibility target. We'll be using
        some of these features today.
      </p>
    </Notes>
  </Slide>
)
