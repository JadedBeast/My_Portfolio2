import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import WhatIDo from './sections/WhatIDo/WhatIDo';

function App() {
  return (
    <>
      <Hero />
      {/*<Projects /> */}
      <WhatIDo />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
