import React from 'react'

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools'

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor'
// The below is to dock the DevTools on top of your components
// But I find using pop up window more convinient
// import DockMonitor from 'redux-devtools-dock-monitor'

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  <LogMonitor theme='tomorrow' />
)

export default DevTools
