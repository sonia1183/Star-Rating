import './App.css';
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
