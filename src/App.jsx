import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";
import Side from "./side";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";
import { useEffect, useRef } from "react";

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
  const headerRef = useRef(null);

  useEffect(() => {
    // Simulate a delay for the sake of demonstration
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  useEffect(() => {
    if (!isLoading && headerRef.current) {
      headerRef.current.setAttribute("data-aos", "fade-out");
      headerRef.current.setAttribute("data-aos-easing", "linear");
      headerRef.current.setAttribute("data-aos-duration", "1000");
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <Side />
          <BrowserRouter>
            <AdoptedPetContext.Provider value={adoptedPet}>
              <QueryClientProvider client={queryClient}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                  }}
                >
                  <div ref={headerRef}>
                    {/* Main content */}
                    <header>
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
                  <Footer />
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
