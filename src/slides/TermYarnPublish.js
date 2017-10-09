import React from 'react'
import { Slide, Appear, List, ListItem } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <List ordered start={12}>
      <ListItem>Publish</ListItem>
    </List>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> npm publish
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>> my-css@1.0.0 prepublishOnly .</div>
          <div>> npm run build</div>
          <div> </div>
          <div>> my-css@1.0.0 build ~/my-css</div>
          <div>
            > postcss 'src/main.css' -o 'dist/main.css' -u postcss-cssnext
          </div>
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div style={{ color: '#21D726' }}>
            ✔ Finished src/main.css (867 ms)
          </div>
          <div>+ my-css@1.0.0</div>
        </div>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
