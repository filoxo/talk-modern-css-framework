import React from 'react'
import { Slide, List, ListItem, Appear, Notes } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <div style={{ maxWidth: '100vw' }}>
      <List ordered style={{ textAlign: 'left', marginTop: 0 }} start={10}>
        <ListItem>Start the server</ListItem>
      </List>
      <SimpleTerminal>
        <Appear transitionDuration={0}>
          <div>
            <span style={{ opacity: 0.6 }}>$</span> npm start
          </div>
        </Appear>
        <Appear transitionDuration={0}>
          <div>
            <div>> npm-run-all -p build:watch serve</div>
            <div>> test-css@1.0.0 build:watch ~/my-css</div>
            <div>> npm run build -- -w</div>
            <div> </div>
            <div>> test-css@1.0.0 serve ~/my-css</div>
            <div>> lr-http-server</div>
          </div>
        </Appear>
        <Appear transitionDuration={0}>
          <div>
            <div style={{ color: '#21D726' }}>
              ✔ Finished src/main.css (123 ms)
            </div>
            <div style={{ color: '#6EC9FD' }}>Waiting for file changes...</div>
          </div>
        </Appear>
        <Appear transitionDuration={0}>
          <div>
            <div>HTTP server listening on port 8080</div>
            <div>Serving ~/my-css</div>
            <div>Livereload listening on port 35729</div>
            <div>Watching files:</div>
            <div> ~/my-css/**/*.html</div>
            <div> ~/my-css/**/*.css</div>
          </div>
        </Appear>
      </SimpleTerminal>
      <Notes>
        <p>
          Now to start our dev server is as easy as `npm start`. Read the output
          carefully and you'll find that you'll recognize everything its doing.
          At the end, you'll also see continuous output of the tasks that are
          running in parallel.
        </p>
      </Notes>
    </div>
  </Slide>
)
