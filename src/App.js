import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/login/SignUp";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
