import React from 'react'
import { Slide, Appear, Heading } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'

export default (
  <Slide transition={['fade']}>
    <Heading size={3}>Initialize project</Heading>
    <SimpleTerminal>
      <Appear transitionDuration={0}>
        <div>» yarn init -y</div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>
            <span style={{ color: '#33B969' }}>success</span> Saved package.json
          </div>
          <div>
            <span role="img" aria-label="stars emoji">
              ✨
            </span>{' '}
            Done in 0.04s.
          </div>
        </div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>» yarn add postcss-cli postcss-cssnext</div>
      </Appear>
      <Appear transitionDuration={0}>
        <div>
          <div>
            [1/4]{' '}
            <span role="img" aria-label="search emoji">
              🔍
            </span>{' '}
            Resolving packages...
          </div>
          <div>
            [2/4]{' '}
            <span role="img" aria-label="truck emoji">
              🚚
            </span>{' '}
            Fetching packages...
          </div>
          <div>
            [3/4]{' '}
            <span role="img" aria-label="link emoji">
              🔗
            </span>{' '}
            Linking dependencies...
          </div>
          <div>
            [4/4]{' '}
            <span role="img" aria-label="document emoji">
              📃
            </span>{' '}
            Building fresh packages...
          </div>
          <div>
            <span role="img" aria-label="stars emoji">
              ✨
            </span>{' '}
            Done in 13.86s.
          </div>
        </div>
      </Appear>
    </SimpleTerminal>
  </Slide>
)
