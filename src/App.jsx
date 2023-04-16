import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faTiktok, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Add the Font Awesome brand icons to the library
library.add(fab);
/*const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;*/
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const iconStyle = {
  color: '#f5773d'
};


const App = () => {
  const adoptedPet = useState(null);
  return (
    <div>
      <div className="left and right">
<div  className="right " style={{ backgroundColor: 'rgb(251,137,72)', background: 'linear-gradient(180deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)',  width: '2px', position: 'fixed', top: 580, bottom: 0,  right: 50 }}>
<div style={{ 
    backgroundColor: 'rgb(251,137,72)',
    background: 'linear-gradient(0deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)',
    width: '2px',
    position: 'fixed',
    top: 100,
    bottom: 500,
    right: 50
}}>
</div><div style={{ transform: 'rotate(-90deg)', transformOrigin: 'top left', position: 'absolute', top: -16, left: -13, textAlign: 'center' }}>
  <span style={{ position: 'relative' , color: '#f5773d'}}>
    Adopt.Me@gmail.com
    <style>
      {`
        span:hover {
          color: #D66712 !important;
          animation: glowing 2s infinite; /* Add animation with desired duration */


        }
        span:hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.5rem;
          width: 100%;
          height: 1px;
          background-color: #f78b4e;
        }

        @keyframes glowing {
          0% {
            text-shadow: 0 0 5px rgba(255, 87, 34, 0.8), 0 0 10px rgba(255, 87, 34, 0.8), 0 0 20px rgba(255, 87, 34, 0.8), 0 0 30px rgba(255, 87, 34, 0.8);
          }
          50% {
            text-shadow: 0 0 20px rgba(216, 67, 21, 0.8), 0 0 40px rgba(216, 67, 21, 0.8), 0 0 60px rgba(216, 67, 21, 0.8), 0 0 80px rgba(216, 67, 21, 0.8);
          }
          100% {
            text-shadow: 0 0 25px rgba(255, 87, 34, 0.8), 0 0 100px rgba(255, 87, 34, 0.8), 0 0 20px rgba(255, 87, 34, 0.8), 0 0 30px rgba(255, 87, 34, 0.8);
          }
        
        }
      `}
    </style>
  </span>
</div>

</div>



<div  className="left " style={{   background: 'linear-gradient(180deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)', width: '2px', position: 'fixed', top: 700, bottom: 0, left: 50 }}>
<div style={{
        transform: 'rotate(-90deg)',
        transformOrigin: 'top left',
        position: 'absolute',
        top: -10,
        left: -10
      }}>
        <div style={{
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
          textAlign: 'center'
          ,color:'#f5773d'
        }}>
         hi
        </div>
      </div>
       

  <div style={{ 
    backgroundColor: 'rgb(251,137,72)',
    background: 'linear-gradient(0deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)',
    width: '2px',
    position: 'fixed',
    top: 100,
    bottom: 450,
    left: 50
}}>
</div>

</div>
</div>

<BrowserRouter>
  <AdoptedPetContext.Provider value={adoptedPet}>
    <QueryClientProvider client={queryClient}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content */}
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{  paddingTop: '10rem', textAlign: 'center', position: 'relative' }}>
  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', zIndex: '-1' }}>
    <div style={{ paddingTop: '1rem' }}>
      <img
        src="./png.png"
        alt="footer"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  </div><div style={{  padding: '0.7rem', textAlign: 'center', position: 'relative' }}>Designed & Built by Fadwa Aljaoui</div>
  {/* Footer content */}
</footer>



      </div>
    </QueryClientProvider>
  </AdoptedPetContext.Provider>
</BrowserRouter>

    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);