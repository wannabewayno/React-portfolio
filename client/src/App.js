import React from "react";
import "./App.css";

// import components
// =====================================
import About     from './sections/About';
import Home      from './sections/Home';
import Contact   from './sections/Contact';
import Portfolio from './sections/Portfolio';
import Header from './components/containers/Header';
import Footer from './components/containers/Footer';

// import page content
// =====================================
import { navLinks } from './content/pageContent'

function App() {
  return (
    <main className='App'>
      <Home/>
      <Header title='Wayne|Full Stack Dev' links={navLinks} position='sticky'/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}


export default App;
