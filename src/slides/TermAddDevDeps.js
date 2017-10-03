import React from 'react'
import { Slide, Appear } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>» yarn add lr-http-server npm-run-all --dev</div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>
            <span style={{ color: '#33B969' }}>success</span> Saved 2 new
            dependencies.
          </div>
          <div>├─ lr-http-server@0.1.5</div>
          <div>└─ npm-run-all@4.1.1</div>
          <div>
            <span role="img" aria-label="stars emoji">
              ✨
            </span>{' '}
            Done in 5.30s.
          </div>
        </div>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
