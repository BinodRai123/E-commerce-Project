import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../Store/Actions/userAction";
import Account from "../components/userAccount/account";

const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(asyncLogoutUser())
        navigate("/register");
    }

  return <>
  <Account />
    <button type="button" onClick={logoutHandler}>Log out</button>
  </>
}

export default LogOut
