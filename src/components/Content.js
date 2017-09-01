import React, { Component } from 'react';
import Paragraph from './Paragraph.js';
class Content extends Component{
        render(){
            return(
               <div>{/*<h1 id="greet">Hej</h1>*/}
              <Paragraph style={style1} />
              <Paragraph style={style2} />
              <Paragraph style={style3} />
                </div>
                
            );
        }
    }
    const style1 = {
        color: 'teal',
        fontFamily: 'monospace'
    }
    
    const style2 = {
        color: 'lightsalmon',
        fontFamily: 'sans-serif'
    }
    
    const style3 = {
        color: 'paleviolet',
        fontFamily: 'serif'
    }
    export default Content;