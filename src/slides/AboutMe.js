import React from 'react'
import { Slide, Heading, Text, Layout, Fit, Fill } from 'spectacle'
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
        <Text textAlign="left">Software Engineer, AncestryDNA</Text>
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
  </Slide>
)
