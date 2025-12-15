import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Products />
      <Contact />
    </Layout>
  );
}

export default App;
