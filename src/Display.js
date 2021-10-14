import React , {Component} from 'react';

class Display extends Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({name:e.target.value});
    }
    render(){
        return(
          <div>
             <input type="text" value={this.state.name} onChange={this.handleChange}/>
             <div>{this.state.name}</div>
          </div>
        )
    }
}
export default Display;