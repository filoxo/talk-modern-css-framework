import React from 'react'
import { Slide } from 'spectacle'
const altText = `
What do we do?

✔︎ get cozy with history
✔︎ use the tech/techniques we have
✔︎ study the tech that's coming`
export default (
  <Slide transition={['fade']}>
    <img
      src="./IMG_20171009_114652.jpg"
      alt={altText}
      style={{ width: '100%' }}
    />
  </Slide>
)
