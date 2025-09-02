import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import AuthWrapper from "./authWrapper"
import UnAuthWrapper from "./unAuthWrapper";
import Contact from "../Pages/contact";
import PagenotFound from "../Pages/pagenotFound";
import Account from "../Pages/logOut";

const Home = lazy(() => import("../Pages/home"));
const Products = lazy(() => import("../Pages/products"));
const Register = lazy(() => import("../Pages/register"));
const Login = lazy(() => import("../Pages/login"));



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AuthWrapper><Products /></AuthWrapper>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<UnAuthWrapper><Register /></UnAuthWrapper>} />
      <Route path="/login" element={<UnAuthWrapper><Login /></UnAuthWrapper>} />
      <Route path="/account" element={<AuthWrapper><Account /></AuthWrapper>} />


      <Route path="*" element={<PagenotFound />} />
    </Routes>
  )
}

export default AllRoutes
