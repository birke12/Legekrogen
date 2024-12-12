import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ProductsPage from "./pages/ProductPage";



function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/productpage", element: <ProductsPage /> },
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
