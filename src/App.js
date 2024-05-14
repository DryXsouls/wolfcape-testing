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
function App() {
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
              </Routes>
              <Footer/>
          </Router>
      </>
  );
}

export default App;
