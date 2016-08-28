import * as types from './mutation-types'

export const decrementMain = ({ commit }) => {
  commit(types.DECREAMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREAMENT_MAIN_COUNTER)
}
