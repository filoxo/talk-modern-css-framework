import React from 'react'
import { Slide, Notes } from 'spectacle'

export default (
  <Slide bgImage="./LEGO-Loop.gif">
    <div style={{ color: '#666', marginTop: '85vh', textAlign: 'right' }}>
      Credit: Chris Gannon
    </div>
    <Notes>
      So npm is just one piece of this build pipeline, the backbone piece, and
      along the way you can choose to add, remove, or replace anything. This is
      the power of building your own framework; it gives you total control.
      npm's large and active ecosystem let's you choose what you want, and
      simply plug and play.
    </Notes>
  </Slide>
)
