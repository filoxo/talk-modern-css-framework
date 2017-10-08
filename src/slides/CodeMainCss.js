import React from 'react'
import { Notes } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

export default (
  <CodeSlide
    transition={['fade']}
    lang="css"
    className="customCodeSlide"
    code={`:root {
  --primary: #3A539B;
  --secondary: #B50000;
  --muted: #0008;
  --transition: .1s transform ease-in-out;
  font-size: 18px;
}

body {
  font-family: system-ui;
}

button {
  font-size: 1rem;
  &.primary {
      background: var(--primary);
      transition: var(--transition);
      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: translateY(5%);
      }
  }
  &.secondary {
      background: var(--secondary);
      transition: var(--transition);
      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: translateY(5%);
      }
  }
}

a, .link {
  color: var(--secondary);
}`}
    ranges={[
      { loc: [0, 1], title: ':root pseudo class' },
      { loc: [1, 5], title: 'Custom properties (CSS variables)' },
      { loc: [3, 4], title: 'RGBA Hex syntax' },
      { loc: [9, 10], title: 'System-ui font' },
      { loc: [14, 24], title: 'Nesting' },
      { loc: [13, 14], title: 'rem unit' }
    ]}
    slideNotes={
      <Notes>
        <p>
          First up is the `:root` pseudo class. This represents the root
          element, which in HTML documents is the `html` element and has a
          higher specificity. This is most useful when declaring custom
          properties as well root styles. More on that in a minute.
        </p>
        <p>
          Alright, custom properties is the formal name for native CSS
          variables. These allow you to set values that are reusable thoughout
          your styles, and are delivered to the browser. This also means that
          you can modify the one variable's value in order to have it update in
          all places ON THE CLIENT.
        </p>
        <p>
          RGBA hex values, allow you to use 4 or 8 digits hexadecimal notation
          to represent your colors. This converts to the rgba syntax until its
          widely supported.
        </p>
        <p>
          The fastest font to load is the one the platform already has. The
          system-ui font value uses the font that your user's system has. For
          example, iPhone will use "San Francisco", and Android will use
          "Roboto".
        </p>
        <p>
          If you've ever used SASS, LESS or Stylus, nesting will probably look
          very familiar to you. This feature is basically an attempt at bringing
          the nesting from preprocessors into the native CSS spec, but its still
          at Stage 1 and is still a bit rough. It compiles to individual class
          definitions because no browser supports this yet.
        </p>
        <p>
          And lastly, the rem unit. This unit is relative to the font-size of
          the root element, which is the html element or our :root pseudoclass
          selector. This could be a great option for consistent sizing of text.
        </p>
      </Notes>
    }
  />
)
