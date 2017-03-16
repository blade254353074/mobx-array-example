import { observable, action, computed } from 'mobx'
import Player from './Player'

class PanelState {
  @observable dataSource = [];
  @observable focus;

  constructor () {
    this.dataSource.push(new Player(this))
    this.focus = 0
  }

  @computed get list () {
    return this.dataSource.peek()
  }

  @computed get player () {
    const index = this.focus
    return this.dataSource[index]
  }

  @action createPlayer = _ => {
    const newPlayer = new Player(this)
    const length = this.dataSource.push(newPlayer)
    this.focus = length - 1
    return newPlayer
  }

  @action clear = _ => {
    this.dataSource.clear()
  }
}

export default PanelState
