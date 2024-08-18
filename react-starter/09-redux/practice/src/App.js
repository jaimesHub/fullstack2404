import './App.css';
import Counter from './components/counter';
import DataComponent from './components/data.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <DataComponent />
      </header>
    </div>
  );
}

export default App;
