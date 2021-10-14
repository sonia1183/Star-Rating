import React from 'react';
import '../src/calculator.css';
const Calculator =()=>{
    const [result, setResult] = React.useState("");
    const handleClick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const clear=()=>{
        setResult("");
    }
    const backspace=()=>{
        setResult(result.substring(0,result.length-1));
    }
    const calculate=()=>{
        setResult(eval(result).toString());
    }
    return(
        <div className="conatiner">
            <div className="screen">
                    <input type="text" value={result}></input>
            </div>
            <div className="buttons">
                 <button className="btn" onClick={handleClick}>9</button>
                 <button className="btn" onClick={handleClick}>8</button>
                 <button className="btn" onClick={handleClick}>7</button>
                 <button className="btn" onClick={handleClick}>+</button>

                 <button className="btn" onClick={handleClick}>6</button>
                 <button className="btn" onClick={handleClick}>5</button>
                 <button className="btn" onClick={handleClick}>4</button>
                 <button className="btn" onClick={handleClick}>-</button>

                 <button className="btn" onClick={handleClick}>3</button>
                 <button className="btn" onClick={handleClick}>2</button>
                 <button className="btn" onClick={handleClick}>1</button>
                 <button className="btn" onClick={handleClick}>*</button>

                 <button className="btn" onClick={calculate}>=</button>
                 <button className="btn" onClick={clear}>AC</button>
                 <button className="btn" onClick={handleClick}>/</button>
                 <button className="btn" onClick={backspace}>C</button>
            </div>
        </div>
    )
}
export default Calculator;