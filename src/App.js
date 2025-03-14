import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Discover from './pages/Discover';
import AtoZ from './pages/AtoZ';
import Quizzes from './pages/Quizzes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/a-z" element={<AtoZ />} />
        <Route path="/dinosaur/:dinoSlug" element={<AtoZ />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
