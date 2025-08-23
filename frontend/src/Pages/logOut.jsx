import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../Store/Actions/userAction";

const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(asyncLogoutUser())
        navigate("/register");
    }

  return <>
    <button type="button" onClick={logoutHandler}>Log out</button>
  </>
}

export default LogOut
