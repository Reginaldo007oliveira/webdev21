import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./hooks/useCart";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1/",
});

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
