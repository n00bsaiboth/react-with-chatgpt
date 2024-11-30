import React from 'react';
// import logo from './logo.svg';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Content from './components/Content'
import Intro from './components/Intro'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Intro />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
