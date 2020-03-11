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
  const profiles = [
    {
      name:"Taro",
      age:10
    },
    {
      age:5
    },
    {
      name:"Jiro"
    }
  ]
  return(
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <h2>I am {props.name}! and {props.age} years old!</h2>
}

User.defaultProps = {
  name: "Taro",
  age: 10
}

export default App;