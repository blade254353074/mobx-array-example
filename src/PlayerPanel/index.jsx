import React from 'react'
import { observer, Provider } from 'mobx-react'
import List from './List'
import Editor from './Editor'
import State from './State'

@observer
class PlayerPanel extends React.Component {
  constructor (props) {
    super(props)

    this.store = new State()
  }

  get value () {
    return this.store.value
  }

  render () {
    return (
      <Provider panelStore={this.store}>
        <div className='ui-player-panel'>
          <List />
          <Editor />
        </div>
      </Provider>
    )
  }
}

export default PlayerPanel
