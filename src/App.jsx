import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import Layout from "./components/Layout/Layout";



function App() {

  const location = useLocation();
  return (
    <>
      <Layout here={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
