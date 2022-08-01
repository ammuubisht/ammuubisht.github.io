import './App.css';
import Home from './screens/home/home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './screens/about/about';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
