import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
