import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { initGA, logPageView } from "./third-party/ga";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AtoZ from "./pages/AtoZ";
import Quizzes from "./pages/Quizzes";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./components/layout/PrivacyPolicy";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <Analytics />
      <Navbar />
      <PrivacyPolicy />
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
