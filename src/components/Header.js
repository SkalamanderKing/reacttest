import React, { Component } from 'react';

class Header extends Component{
    render(){
        if(this.props.isVisible){
        return(
            <div className="html">
                <h1>Frontendbloggen</h1>
                <div style={{backgroundColor: "teal", color: "lightsalmon"}}>
            <h1> Hey! </h1>
        
            <h1>{this.props.values.greeting} {this.props.values.name} </h1>
        </div>
                </div>
        
        );
    }else {return null;}
    }
}
export default Header;