import { Outlet } from 'react-router-dom';
import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Post from './components/Post';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Post /> */}
      {/* <Contact /> */}

      <Outlet />
    </>
  );
}

export default App;
