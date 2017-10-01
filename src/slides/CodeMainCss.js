import React from 'react'
import CodeSlide from 'spectacle-code-slide'

export default (
  <CodeSlide
    transition={['fade']}
    lang="css"
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
  />
)
