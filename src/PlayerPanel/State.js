import { observable, action, computed } from 'mobx'
import Player from './Player'

class PanelState {
  @observable dataSource = [];
  @observable focus;

  constructor () {
    this.dataSource.push(new Player(this))
    this.focus = 0
  }

  @computed get player () {
    return this.dataSource[this.focus]
  }

  @action createPlayer = _ => {
    const newPlayer = new Player(this)
    const length = this.dataSource.push(newPlayer)
    this.focus = length - 1
    return newPlayer
  }

  @action onFocus = index => {
    this.dataSource[index]
      ? this.focus = index
      : this.focus = this.dataSource.length - 1
  }

  @action clear = _ => {
    this.dataSource.clear()
  }
}

export default PanelState
