import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
class App extends Component {
  state = {
    ninjas: [
      {name:'ryu',age:30, belt: 'black', id:1},
      {name:'mario',age:31, belt: 'blue', id:2},
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
       let ninjas = this.state.ninjas.filter(ninja => {
         return ninja.id !== id;
       })
       this.setState({
         ninjas: ninjas
       })
  }

  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps,prevState){
    console.log('component updated');
    console.log(prevProps,prevState);
  }

  render(){
  return (
    <div className="App">
      
      <h1>Hello !</h1>
      <p>Please come</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas = {this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}
}
export default App;
