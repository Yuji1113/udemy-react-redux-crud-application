import React,{Component} from 'react';

const greeting = "Hi,Tanaka";
class App extends Component{
  render(){
    return (
    <React.Fragment>
      <h1 className="foo">{greeting}</h1>
      <input type="text" onChange={() => {console.log("I am Clicked!")}} className="foo" />
    </React.Fragment>
    )
  }
}
// }

// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello World!!"
//     )
//   }
// }

export default App;