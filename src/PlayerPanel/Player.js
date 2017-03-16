import { observable } from 'mobx'

class Player {
  id;
  store;
  @observable name;
  @observable introduce;

  constructor (store, { name = 'Untitled', introduce = '' } = {}) {
    this.id = +new Date()
    this.store = store

    this.name = name
    this.introduce = introduce
  }

  reset = _ => {
    this.id = +new Date()
    this.name = 'Untitled'
    this.introduce = ''
  }

  destory = _ => {
    const { dataSource } = this.store
    const isLastOne = dataSource.length === 1

    if (isLastOne) return dataSource[0].reset()
    console.log(this.store.focus)
    this.store.focus = this.store.focus - 1
    console.log(this.store.focus)
    dataSource.remove(this)
  }
}

export default Player
