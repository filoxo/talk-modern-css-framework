import React from 'react'
import { Slide, Heading, Text, Layout, Fit, Fill, Notes } from 'spectacle'
import twitterSvg from '../twitter.svg'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3} textColor="heading">
      About me
    </Heading>
    <Layout>
      <Fit>
        <img
          src="./2017.jpg"
          alt="Carlos Filoteo"
          style={{
            maxWidth: '15vw',
            margin: '0 1em',
            border: '3px solid #fff',
            borderRadius: '100%'
          }}
        />
      </Fit>
      <Fill style={{ marginTop: '3vmin' }}>
        <Text textAlign="left">
          <img
            src="https://www.ancestrycdn.com/ui-static/i/logo/ancestry-dna-on-dark.svg"
            alt="AncestryDNA logo"
            style={{ height: '2.5rem', marginBottom: -10 }}
          />
        </Text>
        <Text textAlign="left">Front-end Developer</Text>
        <Text textAlign="left">
          <img
            src={twitterSvg}
            alt="Twitter icon"
            width="25em"
            style={{ marginBottom: -5 }}
          />{' '}
          @cfiloteo12
        </Text>
      </Fill>
    </Layout>
    <Notes>
      A little about me: my name is Carlos Filoteo, originally from Las Vegas,
      NV. I currently work as a front-end developer for AncestryDNA in Lehi UT.
      You can reach out to me on Twitter after this talk if you have any
      questions.
      <p>
        I'm experiencing a lot of firsts this weekend.
        <ul>
          <li>This is my first time in New Orleans</li>
          <li>first time attending @CSSDevConf</li>
          <li>first time speaking in front of such a large audience</li>
        </ul>
      </p>
    </Notes>
  </Slide>
)
