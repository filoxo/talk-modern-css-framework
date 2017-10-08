import React from 'react'
import { Slide, List, ListItem, CodePane, Code, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={3}>
        <ListItem>
          Create <Code>src</Code> directory
        </ListItem>
        <ListItem>
          Create <Code>main.css</Code> file in <Code>src</Code>
        </ListItem>
        <ListItem>Add npm script to run postcss (in package.json)</ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"scripts": {
  "build": "postcss 'src/main.css' 
              --output 'dist/main.css' 
              --use postcss-cssnext"
}`}
      </CodePane>
      <List ordered start={6} style={{ marginTop: 0 }}>
        <ListItem>
          Open up <Code>main.css</Code> and begin writing!
        </ListItem>
      </List>
    </div>
    <Notes>
      <p>
        OK, so now we've got the basics of an npm project. Create a `src`
        directory to contain our project's source code. Create a main.css file
        in that directory. Pretty simple.
      </p>
      <p>
        Next, let's create our first npm script in package.json. This script
        will just be to run PostCSS to process our main.css file. In
        package.json add a "build" key inside the scripts object, and the value
        will be "postcss", the first parameter is the input file (`src/main.css`
        in this case); we also set the output to `dist/main.css`; and last,
        we're also passing in a '--use' flag so PostCSS uses the installed
        cssnext plugin. All of this functionality wrapped up into a single
        script. In order to use this all you'll need to do is type `npm run
        build` which we'll use later.
      </p>
    </Notes>
  </Slide>
)
