import React from 'react';
import './App.css';
import MenuSideBar from './components/MenuSidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login/Login';
import LoginBox from './components/LoginBox';

function App() {
  return (
      <Router>
        <Routes >
          <Route path='/' element={<MenuSideBar />} >
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/loginboxed" element={<LoginBox />} />
        </Routes>
      </Router>
  );
}

export default App;
