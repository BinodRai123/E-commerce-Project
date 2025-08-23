import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import AuthWrapper from "./authWrapper"

const Home = lazy(() => import("../Pages/home"));
const Products = lazy(() => import("../Pages/products"));
const Register = lazy(() => import("../Pages/register"));
const Login = lazy(() => import("../Pages/login"));
const LogOut = lazy(() => import("../Pages/logOut"));



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AuthWrapper><Products /></AuthWrapper>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<AuthWrapper><LogOut /></AuthWrapper>} />
    </Routes>
  )
}

export default AllRoutes
