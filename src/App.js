import './App.css';
import Home from './pages/Home.tsx';
import TradePage from './pages/TradePage.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.tsx'; 
import Videos from './pages/videos.tsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/video" element={<Videos />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
