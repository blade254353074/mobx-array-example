import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import PlayerPanel from './PlayerPanel'

@observer
class App extends Component {
  render () {
    return (
      <div>
        <DevTools />
        <PlayerPanel />
      </div>
    )
  }
}

export default App
