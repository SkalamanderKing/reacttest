import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Navbar from './components/Navbar.js';
//import Paragraph from './components/Paragraph.js';
class App extends Component {
  constructor()
  {
    super();
    {/*this.blabla="Konstruktor test";*/}
    this.state = {testarState: "State test"};
  }
  getVal(val){
    return "JavScript-funktionstest! "+val;
  }
  render() {
    document.body.style.backgroundColor = "green";
    setTimeout(() =>{
      this.setState({testarState: "Nytt state"});
    }, 1000)
  
    return (
      <div>
        <Navbar />
        {/*<Header name ="Skalamander" greeting="wow just go away"/>*/}
        <Header values={values} isVisible={true}/>
        <Content />
        <h3>Test {this.getVal(1)} </h3>
       {/* <h3>Test 2 {this.blabla} </h3>*/}
       {this.state.testarState}
      </div>
      
    );
  }
}
const values = {
  name: "Skala",
  greeting: "Go away"
}

export default App;
