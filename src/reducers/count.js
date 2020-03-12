import { INCREMENT,DECREMENT } from "../actions"

const initialState = {value:0}

export default (state=initialState,action) => {
  //引数は2つ持つ
  //第一引数はstate=状態はdefaultはinitialState
  //受け取ったactionのtypeに応じての状態(state)を変更して返す
  switch(action.type){
    //action.typeは2種類 INCRERMENT DECREMENT
    //未定義、初期状態の場合はdefult
    case INCREMENT:
      return {value : state.value + 1}
    case DECREMENT:
      return {value : state.value - 1}
    default:
      return state
  }
}