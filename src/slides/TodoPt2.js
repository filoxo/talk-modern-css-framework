import React from 'react'
import { Slide, List, ListItem, CodePane, Code, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={7}>
        <ListItem>
          Create <Code>index.html</Code> with content
        </ListItem>
      </List>
      <CodePane
        fit
        lang="html"
        className="language-html"
        style={{ fontSize: '3vmin' }}
      >
        {`...
<link rel="stylesheet" href="dist/main.min.css">
...
<main>
  <h1>My CSS</h1>
  <section>
    <h2>Buttons</h2>
    <div>
      <button class="primary" type="button">Primary</button>
      <button class="secondary" type="button">Secondary</button>
    </div>
  </section>
</main>`}
      </CodePane>
      <Notes>
        Having CSS without corresponding HTML doesn't make sense so let's create
        our `index.html` with a link to our dist version so we know what we're
        publishing, and then HTML content that uses our styles. A note, I've
        omitted some of the content to fit on this slide.
      </Notes>
    </div>
  </Slide>
)
