import React, { Component } from 'react';

class Paragraph extends Component{
    render(){
        return(
            <div>
           {/* <p className="paragraph">Exercitation pariatur ea aliquip aliquip in enim occaecat 
                proident sit cupidatat reprehenderit incididunt.</p>*/}
                <p className="paragraph" style={this.props.style}> What's in style? </p>
                </div>
        );
    }
}
export default Paragraph;