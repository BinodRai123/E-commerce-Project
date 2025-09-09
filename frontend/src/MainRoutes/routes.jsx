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
const Account = lazy(() => import("../Pages/Account"));
const AddressBook = lazy(() => import("../Pages/Account/addressBook"));
const AccountDashbard = lazy(() => import("../components/userAccount/accountDashboard"));
const PaymentOption = lazy(() => import("../Pages/Account/paymentOption"));
const MyReturns = lazy(() => import("../Pages/Account/orders/myReturns"));

const accountRoutes = [
  { path: "myDashboard", element: <AccountDashbard /> },
  { path: "address-book", element: <AddressBook /> },
  { path: "payment-options", element: <PaymentOption /> },
  { path: "myReturns", element: <MyReturns /> },
];

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<AuthWrapper><WishList /></AuthWrapper>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<UnAuthWrapper><Register /></UnAuthWrapper>} />
      <Route path="/login" element={<UnAuthWrapper><Login /></UnAuthWrapper>} />


      <Route path="/account" element={<AuthWrapper><Account /></AuthWrapper>}>
        {accountRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>


      <Route path="*" element={<PagenotFound />} />
    </Routes>
  )
}

export default AllRoutes
