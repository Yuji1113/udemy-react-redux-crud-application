import _ from 'lodash'
import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from "../actions"

export default (events={},action) => {
  //引数は2つ持つ
  //第一引数はstate=状態はdefaultはinitialState
  //受け取ったactionのtypeに応じての状態(state)を変更して返す
  switch(action.type){

    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // console.log(action.response.data)
      return { ...events,[data.id]:data }
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
      delete events[action.id]
      return { ...events }
        // return _.mapKeys(action.response.data,'id')
    default:
      return events
  }
}