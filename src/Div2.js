import React , {Component} from 'react';

class Div2 extends Component{
    render(){
        return(
          <div style={{backgroundColor: this.props.color , width:"400px" , height:"200px"}}>{this.props.color}</div>
        )
    }
}
export default Div2;