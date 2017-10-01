import React from 'react'
import { Slide, Heading, Text, Appear, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3} textColor="heading">
      Why?
    </Heading>
    <Appear>
      <Text>Your brand ≠ Bootstrap</Text>
    </Appear>
    <Appear>
      <Text>Decisions & Tradeoffs</Text>
    </Appear>
    <Appear>
      <Text>Performance</Text>
    </Appear>
    <Appear>
      <Text>Maintainability & Enhancements</Text>
    </Appear>
    <Notes>
      <p>
        I want to talk about what my motivations for this talk, for the most
        part these reasons are timeless.
        <br />
        Why should you ever build your own CSS framework? There are a lot of
        really good reasons actually.
      </p>
      <ul>
        <li>
          The first is your site's brand probably isn't exactly like someone
          else's. The visual design of everything included in a CSS framework is
          part of the image and experience you're giving to your sites'
          visitors.
        </li>
        <li>
          Not all frameworks are created equally. Every framework is a
          compilation of decisions and tradeoffs. What browsers do you need to
          support? Does it pass all accessibility checks? By creating your own,
          you're making these decisions rather than accepting them from
          elsewhere.
        </li>
        <li>
          Page sizes are getting bigger in the overall. Size is one aspect to
          performance, but also realize that after downloading, the browser
          needs to parse, evaluate, and render all the styles. Maybe you don't
          need to load a complex UI library and roll your own instead.
        </li>
        <li>
          Have any of you wanted to extend or maybe just tweak a few things a
          large CSS framework like Bootstrap, Foundation, or jQuery UI? Forking
          is an option, but maybe so it creating your own.
        </li>
      </ul>
    </Notes>
  </Slide>
)
