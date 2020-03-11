import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  //初期化処理：classが呼び出された時に実行される
  constructor(props){
    super(props)
    console.log(this.state);
    this.state = {count : 10}
  }

  handlePlusButton = () => {
    // console.log("handlePlusButton")
    // console.log(this.state.count)
    // const count = this.state.count;
    // if(count < 1){
    //   this.setState({count: 10})
    // }else{
      // }
      this.setState({count: this.state.count + 1})
    // this.state.count = this.state.count + 1;
  }

  handleMinusButton = () => {
    // console.log("handlePlusButton")
    // console.log(this.state.count)
    // const count = this.state.count;
    // if(count < 1){
    //   this.setState({count: 10})
    // }else{
    // }
    this.setState({count: this.state.count - 1})
    // this.state.count = this.state.count + 1;
  }


  render(){
    console.log("render")
    return (
    <React.Fragment>
      <p>count:{this.state.count}</p>
      <p><button onClick={this.handlePlusButton}>+1</button></p>
      <p><button onClick={this.handleMinusButton}>-1</button></p>
    </React.Fragment>
    )
  }
}


export default App;