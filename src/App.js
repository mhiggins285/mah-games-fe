import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CurrentUserContext } from './contexts/CurrentUserContext'

import './App.css';

import Header from './components/re-used/Header'
import NavBar from './components/re-used/NavBar'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import ReviewPage from './components/ReviewPage'
import ErrorPage from './components/ErrorPage'

function App() {

  const [currentUser, setCurrentUser] = useState();

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={ { currentUser, setCurrentUser } }>
      <div className="App">
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/log-in" element={<LogInPage/>}/>
          <Route path="/reviews/:review_id" element={<ReviewPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
