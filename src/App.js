import './App.css';
//import Div1 from './Div1';
//import Div2 from './Div2';
//import Display from './Display';
//import Calculator from './calculator';
import StarRating from './StarRating';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StarRating totalStars={5}/>
      </header>
    </div>
  );
}

export default App;
