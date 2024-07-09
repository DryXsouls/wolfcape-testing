import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Tales from './components/pages/Tales';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from "./components/Footer";
import StoryLTS from "./components/pages/StoryLTS";
import StoryCC from "./components/pages/StoryCC";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";
import axios from 'axios';
import {useTranslation} from "react-i18next";
import './i18n.js';

function App() {
    axios.defaults.withCredentials = true;
    const{t}=useTranslation();
  return (
      <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/About' exact element={<About/>}/>
                  <Route path='/News' exact element={<News/>}/>
                  <Route path='/Tales' exact element={<Tales/>}/>
                  <Route path='/Contact' exact element={<Contact/>}/>
                  <Route path='/lts' exact element={<StoryLTS/>}/>
                  <Route path='/cc' exact element={<StoryCC/>}/>
                  <Route path='/SignIn' exact element={<SignIn/>}/>
                  <Route path='/SignUp' exact element={<SignUp/>}/>
                  <Route path ='/Profile' exact element={<Profile/>}/>
              </Routes>
              <Footer/>
          </Router>
      </>
  );
}

export default App;
