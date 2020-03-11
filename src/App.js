import React from 'react';

// class App extends Component{
//   render(){
//     return (
//     <React.Fragment>
//       <input type="text" onChange={() => {console.log("I am Clicked!")}} className="foo" />
//     </React.Fragment>
//     )
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <h1>Meow!</h1>
}


export default App;