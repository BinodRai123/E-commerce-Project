import { Routes, Route } from "react-router-dom"
import  Register  from "../Pages/register"
import  Home  from "../Pages/home"
import Login from "../Pages/login"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AllRoutes
