import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={ <ProductsPage /> }/>
      </Routes>

    </>
  );
}

export default App;
