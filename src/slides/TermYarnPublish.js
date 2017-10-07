import React from 'react'
import { Slide, Appear } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>
          <span style={{ opacity: 0.6 }}>$</span> npm publish
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>> new-css@1.0.0 prepublishOnly .</div>
          <div>> npm run build</div>
          <div> </div>
          <div>> new-css@1.0.0 build /Users/cfiloteo/dev/new-css</div>
          <div>> postcss 'src/main.css' -o 'dist/main.min.css'</div>
          <div> </div>
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div style={{ color: '#21D726' }}>
            ✔ Finished src/main.css (867 ms)
          </div>
          <div>+ new-css@1.0.0</div>
        </div>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
