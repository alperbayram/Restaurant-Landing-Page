import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Error404 from "./pages/Error404"
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
