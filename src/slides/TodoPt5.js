import React from 'react'
import { Slide, List, ListItem, CodePane, Notes, Code } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginBottom: 0 }} start={11}>
        <ListItem>
          Add list of files to publish in <Code>package.json</Code>
        </ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"main": "dist/main.css",
"files": [
  "dist/main.css",
  "src/main.css"
],`}
      </CodePane>
      <List
        ordered
        style={{ textAlign: 'left', marginTop: 0, marginBottom: 0 }}
        start={12}
      >
        <ListItem>Add prepublish script</ListItem>
      </List>
      <CodePane
        fit
        lang="json"
        className="language-json"
        style={{ fontSize: '3.5vmin' }}
      >
        {`"scripts": {
    ...
    "prepublishOnly": "npm run build"
}`}
      </CodePane>
      <Notes>
        <p>
          Right so at some point you will want to share what you have, so it can
          be consumed by others. We'll add a main key which will be the default
          file that gets pulled in when our package is imported. The files key
          is an array of files that will be included when we publish. In this
          example, I include both the dist file as well as the source file in
          case someone wants to include our code in their own pipeline. Now all
          we need to do is run our build script just before publishing. Easy
          peasy.
        </p>
      </Notes>
    </div>
  </Slide>
)
