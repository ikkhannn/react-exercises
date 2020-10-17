import React, {Component} from 'react';
import Ninjas from './Ninjas';
class App extends Component {
  state = {
    ninjas: [
      {name:'ryu',age:30, belt: 'black', id:1},
      {name:'mario',age:31, belt: 'blue', id:2},
    ]
  }
  render(){
  return (
    <div className="App">
      
      <h1>Hello !</h1>
      <p>Please come</p>
      <Ninjas ninjas = {this.state.ninjas}/>
    </div>
  );
}
}
export default App;
