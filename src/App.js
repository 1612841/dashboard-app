import React from 'react';
import './App.css';
import MenuSideBar from './components/MenuSidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login/Login';

function App() {
  return (
      <Router>
        <Routes >
          <Route path='/' element={<MenuSideBar />} >
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
