import _ from 'lodash'
import {
  READ_EVENTS,
  DELETE_EVENT
} from "../actions"

export default (events={},action) => {
  //引数は2つ持つ
  //第一引数はstate=状態はdefaultはinitialState
  //受け取ったactionのtypeに応じての状態(state)を変更して返す
  switch(action.type){
    //action.typeは2種類 INCRERMENT DECREMENT
    //未定義、初期状態の場合はdefult
    case READ_EVENTS:
// [
//   {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
//   {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
// ]
// 下記に変換する方がアクセシビリティが良くなる
// lodashを利用する
// {
//   1:{"title":"Let's have an event 1!","body":"This is the body for event 1."},
//   2:{"title":"Let's have an event 2!","body":"This is the body for event 2."}
// }

      // console.log(action.response.data)
      // console.log(_.mapKeys(action.response.data,'id'))
      return _.mapKeys(action.response.data,'id')
    case DELETE_EVENT:
      console.log(action.id)
      delete events[action.id]
      return { ...events }
        // return _.mapKeys(action.response.data,'id')
    default:
      return events
  }
}