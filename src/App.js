import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import News from './components/pages/News'
import Stories from './components/pages/Stories'
import Gallery from './components/pages/Gallery'
import Contact from './components/pages/Contact'
function App() {
  return (
      <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/News' exact element={<News/>}/>
                  <Route path='/Stories' exact element={<Stories/>}/>
                  <Route path='/Gallery' exact element={<Gallery/>}/>
                  <Route path='/Contact' exact element={<Contact/>}/>

              </Routes>
          </Router>
      </>
  );
}

export default App;
