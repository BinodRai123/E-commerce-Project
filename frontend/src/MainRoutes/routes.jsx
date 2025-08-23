import { Routes, Route } from "react-router-dom"
import  Register  from "../Pages/register"
import  Home  from "../Pages/home"
import Login from "../Pages/login"
import Products from "../Pages/products"
import LogOut from "../Pages/logOut"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  )
}

export default AllRoutes
