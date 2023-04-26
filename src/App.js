import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/:id" element={<MovieDetails />} />
         
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
