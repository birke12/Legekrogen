import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ProductsPage from "./pages/ProductPage";
import MembersPage from "./pages/MembersPage";
import Faq from "./pages/Faq";

import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./components/topInfo/topInfo.module.css"; // Ensure you import styles here
import BecomeMember from "./components/becomeMember/BecomeMember.jsx";

const TopInfo = () => {
  return <div className={styles.topInfo}>Fri fragt ved køb over 499 ,-</div>;
};

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/productpage", element: <ProductsPage /> },
    { path: "/faq", element: <Faq /> },
    { path: "/membersPage", element: <MembersPage /> },
  ]);

  return (
    <>
      <div className="app">
    {/*   <TopInfo /> */}
        <Navigation />
        <div className="content">{routes}</div>
        <BecomeMember />
        <Footer />
      </div>
    </>
  );
}

export default App;
