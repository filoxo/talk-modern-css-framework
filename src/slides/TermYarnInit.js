import React from 'react'
import { Slide, Appear, List, ListItem, Notes } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <List ordered>
      <ListItem>Setup & Initialize</ListItem>
    </List>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> mkdir my-css && cd my-css
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> npm init -y
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <pre style={{ margin: 0 }}>
          <div>{`Wrote to ./package.json:`}</div>
          <div>{`{`}</div>
          <div>{`  "name": "my-css",`}</div>
          <div>{`  "version": "1.0.0",`}</div>
          <div>{`  ...`}</div>
          <div>{`  "main": "index.js",`}</div>
          <div>{`  "scripts": {`}</div>
          <div
          >{`    "test": "echo \\"Error: no test specified\\" && exit 1"`}</div>
          <div>{`  }`}</div>
          <div>{`}`}</div>
        </pre>
      </Appear>
    </SimpleTerminal>
    <Notes>
      <p>
        Alright, to get started I'm going to try to show you what steps you'll
        need to take in order to have a working pipeline that creates a
        development setup, builds your code, and publishes to npm. Its a total
        of X steps.
      </p>
      <p>
        Step 1 is to setup your project workspace. So we'll make a directory for
        our now project (name it whatever you want), navigate into it, and then
        run `npm init`.
      </p>
      <p>
        The `npm init` command simply creates a package.json file that contains
        the metadata you provide to it such as author, description, and
        repository url; You can also bypass this interactive setup by passing in
        the `--yes` flag like I did above. Then it'll tell you what your
        package.json contains. You'll see something like this.
      </p>
    </Notes>
  </Slide>
)
