import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import TopDeals from "./pages/TopDeals"
import HotOffers from "./pages/HotOffers"
import Pages from "./pages/Pages"
import ProductsFilter from "./pages/ProductsFilter";
import HelpCenter from "./pages/HelpCenter";
import ContactUS from "./pages/ContactUS";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DeliveryAdress from "./pages/DeliveryAdress";

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
          <Route path="/helpCenter" element={<HelpCenter />} />
          <Route path="/contectUS" element={<ContactUS />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/deliveryAdress" element={<DeliveryAdress />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
