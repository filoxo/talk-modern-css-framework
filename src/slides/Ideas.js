import React from 'react'
import { Slide, Heading, List, ListItem, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3} textColor="heading">
      Ideas
    </Heading>
    <List style={{ width: '50%', margin: '0 auto', minWidth: 320 }}>
      <ListItem>Grey-scale</ListItem>
      <ListItem>Themable</ListItem>
      <ListItem>
        <a href="https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939">
          Focus on Accessibility
        </a>
      </ListItem>
      <ListItem>CSS-in-JS</ListItem>
      <ListItem>
        <a href="https://www.youtube.com/watch?time_continue=2&v=JiXTVRXP_z0">
          Build uselessware
        </a>
      </ListItem>
      <Notes>
        <p>Here are some ideas for you to go forth and try:</p>
        <ul>
          <li>A theme that uses only grey-scale colors</li>
          <li>A framework that is themable using CSS custom properties</li>
          <li>Dive deep into enhancing accessibility with CSS</li>
        </ul>
      </Notes>
    </List>
  </Slide>
)
