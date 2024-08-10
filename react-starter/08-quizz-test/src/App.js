import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import ListExams from "./pages/ListExams";
import Contact from "./pages/Contact";
import DetailExam from "./pages/DetailExam";
import Transcript from "./pages/Transcript";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Admin from "./pages/Admin";
import CreateExam from "./pages/Admin/ManageExams/CreateExam";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageExams from "./pages/Admin/ManageExams";
import ManageFeedback from "./pages/Admin/ManageFeedback";
import Dashboard from "./pages/Admin/Dashboard";

import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <>
      {/* define routes */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="list-exams" element={<ListExams />} />
          <Route path="contact" element={<Contact />} />
          <Route path='/detail/:idExam' element={<DetailExam />} />
          <Route path='/transcript' element={<Transcript />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/change-password' element={<ChangePassword />} />
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='exams' element={<ManageExams />} />
          <Route path='exams/create' element={<CreateExam />} />
          <Route path='exams/update/:idExam' element={<CreateExam />} />
          <Route path='users' element={<ManageUsers />} />
          <Route path='feedback' element={<ManageFeedback />} />
        </Route>
      </Routes>

      {/* <div className="App">
        <div className='App-header'>
          <h1>08 - Mini Project - Quizz Test</h1>
        </div>
      </div> */}
    </>
  );
}

export default App;
