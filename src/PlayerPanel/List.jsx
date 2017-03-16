import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('panelStore') @observer
class List extends React.Component {
  constructor (props) {
    super(props)

    this.store = props.panelStore
  }

  onDelete (event, destory) {
    event.stopPropagation()
    destory()
  }

  render () {
    const { dataSource, focus, createPlayer } = this.store

    const players = dataSource.map(({ id, name, introduce, destory }, index) => {
      const focusClass = focus === index ? ' focus' : ''
      return (
        <li
          className={`item${focusClass}`}
          key={id}
          onClick={_ => this.store.onFocus(index)}
        >
          <p className='single-line'>{name}</p>
          <p className='single-line'>{introduce}</p>
          <button onClick={event => this.onDelete(event, destory)}>Delete</button>
        </li>
      )
    })

    return (
      <div className='ui-player-list'>
        <ul>{players}</ul>
        <div className='ui-player-add-wrapper'>
          <button className='ui-player-add' onClick={createPlayer}>+ New</button>
        </div>
      </div>
    )
  }
}

export default List
