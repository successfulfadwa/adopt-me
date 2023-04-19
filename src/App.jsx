import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";
import Side from "./side";
import Footer from "./Footer";
import LoadingPage from './LoadingPage';
import React, {  useEffect } from 'react';


import AOS from 'aos';

import 'aos/dist/aos.css'; // Import AOS CSS
if (typeof window !== 'undefined') {
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
}




// Add the Font Awesome brand icons to the library
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



const App = () => {
  const adoptedPet = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the sake of demonstration
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);
  return (
    <div>
       {isLoading ? (
        <LoadingPage />
      ) : (
      <div >
      <Side/>
<BrowserRouter>
  <AdoptedPetContext.Provider value={adoptedPet}>
    <QueryClientProvider client={queryClient}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content */}
        <div>
        <header >
          <Link to="/">Adopt Me!</Link>
        </header>
        </div>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer/>


      </div>
    </QueryClientProvider>
  </AdoptedPetContext.Provider>
</BrowserRouter>

    </div>
          )}

    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);