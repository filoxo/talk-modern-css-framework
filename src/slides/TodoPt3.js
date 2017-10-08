import React from 'react'
import { Slide, List, ListItem, CodePane, Notes, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={9}>
        <ListItem>
          Add development scripts to <Code>package.json</Code>
        </ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"scripts": {
  "build": "postcss 'src/main.css' -o 'dist/main.min.css'",
  "build:watch": "npm run build -- --watch",
  "serve": "lr-http-server",
  "start": "npm-run-all -p build:watch serve"
}`}
      </CodePane>
      <Notes>
        <p>
          We'll be adding a few more scripts to run for our development
          environment.
        </p>
        <p>
          First, lets reuse our build script but add an additional parameter to
          have it watch for changes. We'll do this by declaring a new
          "build:watch" task, and have it call `npm run build`. You can pass
          additional params into that script by adding `--` (dash dash) before
          them, and these will be picked up by the process that `npm run build`
          executes, which is postcss. This means that if we ever need to update
          our build configuration, it'll only need to be in one place.
        </p>
        <p>
          Next we'll add a serve task that just aliases lr-http-server. By
          default the server will serve the content in the directory in which
          its executed. Pretty simple.
        </p>
        <p>
          And then lastly, we'll compose a few of our tasks into a "start"
          script that will use npm-run-all with a --parallel flag to run our
          build:watch and serve tasks concurrently.
        </p>
      </Notes>
    </div>
  </Slide>
)
