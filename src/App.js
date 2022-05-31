import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
import Purchase from "./pages/Purchase";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./pages/login/RequireAdmin";
import Payment from "./pages/Dashboard/Payment";
import ManageReviews from "./pages/Dashboard/ManageReviews";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="*" element={<NotFound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />} />

        {/* private route */}
        <Route element={<RequireAuth />}>
          <Route path="/tool/:id" element={<Purchase />} />
        </Route>

        {/* nested */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="my-order" element={<MyOrder />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="/dashboard" element={<MyProfile />} />
          <Route path="review" element={<AddReview />} />
          <Route path="manage-order" element={<ManageOrders />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAddmin />
              </RequireAdmin>
            }
          />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="manage-review" element={<ManageReviews />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>
      </Routes>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
