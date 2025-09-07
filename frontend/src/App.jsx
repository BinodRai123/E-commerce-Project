import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import AllRoutes from "./MainRoutes/routes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const hideFooterOn = ["/login", "/register","/account"];
  return (
    <>
      <Navbar />
      <AllRoutes />
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
