import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Layout() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-primary flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Fallback to Home for unknown routes or old /about links */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
