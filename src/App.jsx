import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Register />
      <Login />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
