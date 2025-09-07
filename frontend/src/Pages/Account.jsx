import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../Store/Actions/userAction";
import AccountDashbard from "../components/userAccount/account";
import Footer from "../components/footer/footer";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/register");
  };

  return (
    <>
      <AccountDashbard />
      <button type="button" onClick={logoutHandler}>
        Log out
      </button>
      <Footer />
    </>
  );
};

export default Account;
