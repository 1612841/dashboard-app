import React from 'react';
import './App.css';
import MenuSideBar from './components/MenuSidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Pages/Login/Login';
import LoginBox from './components/Pages/LoginBox/index';
import Register from './components/Pages/Register/Register';
import Registerbox from './components/Pages/RegisterBox/Registerbox';
import Forgot from './components/Pages/forgotpassword/Forgot';

function App() {
  return (
      <Router>
        <Routes >
          <Route path='/' element={<MenuSideBar />} >
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/loginboxed" element={<LoginBox />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerboxed" element={<Registerbox />} />
          <Route path="/forgotpassword" element={<Forgot />} />
        </Routes>
      </Router>
  );
}

export default App;
