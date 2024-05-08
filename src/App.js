import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import News from './components/pages/News'
function App() {
  return (
      <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/News' exact element={<News/>}/>
                  <Route path='/News' exact element={<News/>}/>
                  <Route path='/News' exact element={<News/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
