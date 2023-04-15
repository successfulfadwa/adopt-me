import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";
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
  return (
    <div>
      <div className="left and right">
<div  className="right " style={{ backgroundColor: 'rgb(251,137,72)', background: 'linear-gradient(180deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)',  width: '2px', position: 'fixed', top: 500, bottom: 0,  right: 50 }}>
<div style={{ 
    backgroundColor: 'rgb(251,137,72)',
    background: 'linear-gradient(0deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)',
    width: '2px',
    position: 'fixed',
    top: 100,
    bottom: 450,
    right: 50
}}>
</div>
   <div style={{ transform: 'rotate(-90deg)', transformOrigin: 'top left', position: 'absolute', top: -10, left: -10,color: '#a43a09'  }}>
            hi
  </div></div>



<div  className="left " style={{  backgroundColor: 'rgb(251,137,72)', background: 'linear-gradient(180deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)', width: '2px', position: 'fixed', top: 500, bottom: 0, left: 50 }}>
<div style={{ transform: 'rotate(-90deg)', transformOrigin: 'top left', position: 'absolute', top: -10, left: -10,color: '#a43a09'  }}>
            hi
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
  </div>Designed & Built by Fadwa Aljaoui
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