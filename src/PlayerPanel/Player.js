import { observable } from 'mobx'

class Player {
  id
  store
  @observable name
  @observable introduce

  constructor (store, { name = 'Untitled', introduce = '' } = {}) {
    this.id = +new Date()
    this.store = store

    this.name = name
    this.introduce = introduce
  }

  reset = _ => {
    this.name = 'Untitled'
    this.introduce = ''
  }

  destory = _ => {
    const { dataSource } = this.store
    const isLastOne = dataSource.length === 1

    if (isLastOne) return dataSource[0].reset()
    this.store.focus--
    dataSource.remove(this)
  }
}

export default Player
