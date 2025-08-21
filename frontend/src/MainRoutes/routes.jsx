import { Routes, Route } from "react-router-dom"
import  Register  from "../Pages/register"
import  Home  from "../Pages/home"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AllRoutes
