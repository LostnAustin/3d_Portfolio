import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, } from "./components";

// import { Helmet } from "react-helmet";
// import { portfolioPrev }  from "./assets/portfolioPrev.png";

const App = () => {
  

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' >
        {/* <Helmet> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" name="description" href="http://chadlengefeld.com/assets/portfolioPrev.png" 
        
        // href={portfolioPrev}
        />

        {/* </Helmet> */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
   
        
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
      
        </div>
      </div>
    </BrowserRouter>
  );
}

<script type="text/javascript" src="node_modules/default-passive-events/dist/index.js"></script>

  
export default App;
