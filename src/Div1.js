import React from 'react';

function Div1(props){
    return(
        <div style={{backgroundColor : props.color,width:"200px",height:"200px"}}>{props.color}</div>
    );
}
export default Div1;