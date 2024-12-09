import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";


function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
  
  
  
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes} </div>

      <Footer />
    </div>
  );
}

export default App;
