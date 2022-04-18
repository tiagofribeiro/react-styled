import React from 'react';
import './App.css';
import Global from './theme/global';
import Header from './components/Header'
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
