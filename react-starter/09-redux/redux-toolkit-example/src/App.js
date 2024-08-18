import './App.css';
import Counter from './components/counter.component';
import Data from './components/user.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Redux toolkit</p>
        <Counter />
        <Data />
      </header>
    </div>
  );
}

export default App;
