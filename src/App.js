import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import TopDeals from "./pages/TopDeals";
import HotOffers from "./pages/HotOffers";
import Pages from "./pages/Pages";
import ProductsFilter from "./pages/ProductsFilter";
import HelpCenter from "./pages/HelpCenter";
import ContactUS from "./pages/ContactUS";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DeliveryAdress from "./pages/DeliveryAdress";
import OrderSummary from "./pages/OrderSummary";
import PaymentOption from "./pages/PaymentOption";
import MyAccount from "./pages/MyAccount";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import WishList from "./pages/WishList";
import ReturnOrder from "./pages/ReturnOrder";
import OrderDetail from "./pages/OrderDetail";
import Register from "./Login/Register";
import Login from "./Login/Login";
import VerifyEmail from "./Login/VerifyEmail";

function App() {
  return (
    <>
      {/* <Header />
      <RouterProvider router={router} /> */}

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
          <Route path="/orderSummary" element={<OrderSummary />} />
          <Route path="/paymentOption" element={<PaymentOption />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/returnOrder" element={<ReturnOrder />} />
          <Route path="/orderDetails" element={<OrderDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
