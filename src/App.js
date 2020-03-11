import React from 'react';
import PropTypes from "prop-types";



const App = () => {
  const profiles = [
     { name:"Taro", age:10 }
    ,{ name:"Hanako", age:5 }
    ,{ name:"TEST", age:3 }
    ,{ name:"NoName", age:4 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;