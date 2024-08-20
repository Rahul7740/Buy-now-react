import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import TopDeals from "./pages/TopDeals"
import HotOffers from "./pages/HotOffers"
import Pages from "./pages/Pages"
import ProductsFilter from "./pages/ProductsFilter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topDeals" element={<TopDeals />} />
          <Route path="/hotOffers" element={<HotOffers />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/productsFilter" element={<ProductsFilter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
