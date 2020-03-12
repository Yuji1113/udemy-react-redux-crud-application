import React, { Component } from 'react';
import { connect } from 'react-redux'

import {increment,decrement} from "../actions"


class App extends Component {
  render(){
    const props = this.props

    return (
    <React.Fragment>
      <p>value:{ props.value }</p>
      <p><button onClick={props.increment}>+1</button></p>
      <p><button onClick={props.decrement}>-1</button></p>
    </React.Fragment>
    )
  }
}

//mapStateToProps
//Stateの情報からコンポーネントに必要な物を取り出してコンポーネント内のpropsにマッピングする
//変数は状態を表すstate
//どういうオブジェクトをpropsとして返すか関数の戻り値として定義する

const mapStateToProps = state =>({value:state.count.value});

//mapDispatchToProps
//actionが発生した時にreducerにtype別の状態遷移を実行させる

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
// ↓ShortHand
const mapDispatchToProps = ({increment,decrement})

export default connect(mapStateToProps,mapDispatchToProps)(App)


// export default App;