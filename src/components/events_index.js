import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import {readEvents} from "../actions"


class EventsIndex extends Component {
  //Componentのマウント後の処理
  componentDidMount(){
    //イベント一覧画面
    //外部のAPIにアクセスして一覧を取得
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events,event => (
      <tr key={event.id}>
        <td> {event.id} </td>
        <td>
        <Link to={`/events/${event.id}`}>
          {event.title}
        </Link></td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    // const props = this.props

    return (
      <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>

      <Link to='/events/new'>NewEvent</Link>
      </React.Fragment>
    )
  }
}

//mapStateToProps
//Stateの情報からコンポーネントに必要な物を取り出してコンポーネント内のpropsにマッピングする
//変数は状態を表すstate
//どういうオブジェクトをpropsとして返すか関数の戻り値として定義する

const mapStateToProps = state =>({ events: state.events });

//mapDispatchToProps
//actionが発生した時にreducerにtype別の状態遷移を実行させる

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
// ↓ShortHand
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)


// export default EventsIndex;