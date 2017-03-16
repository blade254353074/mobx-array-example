import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('panelStore') @observer
class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.store = props.panelStore
  }

  render () {
    const { player, focus } = this.store
    const { name, introduce } = player

    return (
      <div className='player-editor'>
        <div className='player-editor-content'>
          <p>index: {focus}</p>
          <p>id: {player.id}</p>
          <input value={name} onChange={e => (player.name = e.target.value)} />
        </div>
        <input value={introduce} onChange={e => (player.introduce = e.target.value)} />
      </div>
    )
  }
}

export default Editor
