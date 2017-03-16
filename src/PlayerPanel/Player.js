import { observable } from 'mobx'
import shortid from 'shortid'

class Player {
  id
  store
  @observable name
  @observable introduce

  constructor (store, { name = 'Untitled', introduce = '' } = {}) {
    this.id = shortid.generate()
    this.store = store

    this.name = name
    this.introduce = introduce
  }

  destory = _ => {
    const { dataSource } = this.store
    const isLastOne = dataSource.length === 1

    this.store.focus--
    dataSource.remove(this)
    if (isLastOne) return this.store.createPlayer()
  }
}

export default Player
