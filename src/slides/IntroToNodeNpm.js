import React from 'react'
import { Slide, Notes, Text } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <svg viewBox="0 0 18 7" width="25vw">
      <path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6" />
      <path
        fill="#FFF"
        d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"
      />
    </svg>
    <Text style={{ marginTop: '10vmin' }}>
      <small>
        <a href="https://docs.npmjs.com/getting-started/installing-node">
          Install Node
        </a>
      </small>
    </Text>
    <Notes>
      <p>
        This talk is titled building your own pipeline. npm will be that
        pipeline, and the output will be a CSS framework.
      </p>
      <p>
        I want to talk about what npm in case there are some people don't have
        much experience with it. npm is actually two things: 1. it is the
        largest software registry where anyone can publish,share, and download
        code (and is not limited to JavaScript); and 2. it is also a commandline
        tool for interacting with the main npm source repository. Our usage of
        npm today will be the latter.
      </p>
      <p>
        npm ships with every installation of Node so once you have Node
        installed you will have npm available to you. The main function of this
        tool is to enable you to easily install and manage dependencies for your
        project. It also allows you to create and run scripts. If you're
        familiar with Bower and Gulp or Grunt, it can essentially replace both
        of those as well as include a few additional features. We will be using
        to install and manage dependencies and manage our build and serving for
        development. It has more features, but this is what we will mostly be
        using it for.
      </p>
      <p>
        Another aside, you may have heard of Yarn. Yarn is an alternative
        command line tool for interacting with the npm repository, and
        originates from the folks at Facebook. We'll be using npm commands today
        but Yarn equivalent commands are very similar if you want to use it
        instead.
      </p>
    </Notes>
  </Slide>
)
