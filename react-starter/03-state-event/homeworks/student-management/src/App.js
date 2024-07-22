import './App.css';
import NewStudent from './components/NewStudent';
import SearchStudent from './components/SearchStudent';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className='container'>
      <h1>Quản lý học sinh</h1>
      <NewStudent />
      <SearchStudent />
      <StudentList />
    </div>
  );
}

export default App;
