import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/login/SignUp";
import RequireAuth from "./pages/login/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder";
import AddReview from "./pages/Dashboard/AddReview";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import AddProduct from "./pages/Dashboard/AddProduct";
import MakeAddmin from "./pages/Dashboard/MakeAddmin";
import ManageProduct from "./pages/Dashboard/ManageProduct";
import MyProfile from "./pages/Dashboard/MyProfile";

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

        {/* private route */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="my-order" element={<MyOrder />} />
            <Route path="/dashboard" element={<MyProfile />} />
            <Route path="review" element={<AddReview />} />
            <Route path="manage-order" element={<ManageOrders />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="make-admin" element={<MakeAddmin />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="profile" element={<MyProfile />} />
          </Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
