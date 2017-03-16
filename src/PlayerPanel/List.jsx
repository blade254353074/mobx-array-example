import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('panelStore') @observer
class List extends React.Component {
  constructor (props) {
    super(props)

    this.store = props.panelStore
  }

  render () {
    const { list, createPlayer } = this.store

    const players = list.map(({ id, name, introduce, destory }, index) => {
      console.log(list, index)
      return (
        <li
          className='item'
          key={id}
          onClick={_ => (this.store.focus = index)}
        >
          <p className='single-line'>{name}</p>
          <p className='single-line'>{introduce}</p>
          <button onClick={destory}>Delete</button>
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
