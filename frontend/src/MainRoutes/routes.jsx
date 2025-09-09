import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import AuthWrapper from "./authWrapper"
import UnAuthWrapper from "./unAuthWrapper";

const Home = lazy(() => import("../Pages/home"));
const WishList = lazy(() => import("../Pages/wishList"));
const Register = lazy(() => import("../Pages/register"));
const Login = lazy(() => import("../Pages/login"));
const PagenotFound = lazy(() => import("../Pages/pagenotFound"))
const Contact = lazy(() => import("../Pages/contact"));
const Account = lazy(() => import("../Pages/Account"))



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<AuthWrapper><WishList /></AuthWrapper>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<UnAuthWrapper><Register /></UnAuthWrapper>} />
      <Route path="/login" element={<UnAuthWrapper><Login /></UnAuthWrapper>} />
      <Route path="/account" element={<AuthWrapper><Account /></AuthWrapper>}>
        {/* <Route path="address-book" element */}
      </Route>



      <Route path="*" element={<PagenotFound />} />
    </Routes>
  )
}

export default AllRoutes
