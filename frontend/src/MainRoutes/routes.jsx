import { Routes, Route } from "react-router-dom"
import  Register  from "../Pages/register"
import  Home  from "../Pages/home"
import Login from "../Pages/login"
import Products from "../Pages/products"
import LogOut from "../Pages/logOut"
import AuthWrapper from "./authWrapper"

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
