// Desc: Top level app component 

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-hero-pattern bg-cover'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;