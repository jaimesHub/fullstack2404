// import { Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Post from './components/Post';
import Profile from './pages/Profile';
import Courses from './pages/Profile/Courses';
import Description from './pages/Profile/Description';
import Settings from './pages/Profile/Settings';
// import ErrorPage from './components/Error';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Post /> */}
      {/* <Contact /> */}

      {/* <Outlet /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:postId' element={<Post />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='/profile' element={<Profile></Profile>} >
          <Route path='' element={<Settings></Settings>} />
          <Route path='courses' element={<Courses></Courses>} />
          <Route path='description' element={<Description></Description>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
