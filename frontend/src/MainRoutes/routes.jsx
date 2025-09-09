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
const Account = lazy(() => import("../Pages/Account/Account"));
const AddressBook = lazy(() => import("../Pages/Account/manageAC/addressBook"));
const AccountDashbard = lazy(() => import("../Pages/Account/manageAC/accountDashboard"));
const PaymentOption = lazy(() => import("../Pages/Account/manageAC/paymentOption"));
const MyReturns = lazy(() => import("../Pages/Account/orders/myReturns"));
const UnderWork = lazy(() => import("../Pages/underConstruction"));

const accountRoutes = [
  { path: "myDashboard", element: <AccountDashbard /> },
  { path: "address-book", element: <AddressBook /> },
  { path: "payment-options", element: <PaymentOption /> },
  { path: "myReturns", element: <MyReturns /> },
  { path: "underWork", element: <UnderWork />}
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
        <Route index element={<AccountDashbard />} />
        {accountRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>


      <Route path="*" element={<PagenotFound />} />
    </Routes>
  )
}

export default AllRoutes
