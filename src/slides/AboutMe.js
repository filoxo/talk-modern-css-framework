import React from 'react'
import { Slide, Heading, Text, Layout, Fit, Fill } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3} textColor="heading" textAlign="left">
      About me
    </Heading>
    <Layout>
      <Fit>
        <img
          src="./2017.jpg"
          alt="Carlos Filoteo"
          style={{
            maxWidth: '20vw',
            marginRight: '1em',
            border: '3px solid #fff',
            borderRadius: '100%'
          }}
        />
      </Fit>
      <Fill>
        <Text textAlign="left">Software Engineer, AncestryDNA</Text>
        <Text textAlign="left">@cfiloteo12</Text>
      </Fill>
    </Layout>
  </Slide>
)
