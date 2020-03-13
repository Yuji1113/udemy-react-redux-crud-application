import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

//MI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'

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
      <TableRow key={event.id}>
        <TableRowColumn> {event.id} </TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render(){
    // const props = this.props
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }

    return (
      <React.Fragment>
      <FloatingActionButton
        style={style}
        mini={true}
        containerElement={<Link to='/events/new' />}
      >
        <ContentAdd />
      </FloatingActionButton>
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {this.renderEvents()}
        </TableBody>
      </Table>


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