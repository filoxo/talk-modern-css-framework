import React from 'react'
import './SimpleTerminal.css'

const SimpleTerminal = props => (
  <div className="termWindow">
    <div className="termMenu">
      <div className="termBtn close" />
      <div className="termBtn minimize" />
      <div className="termBtn zoom" />
    </div>
    <div className="termScreen">{props.children}</div>
  </div>
)

export default SimpleTerminal
