import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserDetailForm from "./userDetailForm";
import { asyncLogoutUser } from "../../Store/Actions/userAction";

const AccountDashbard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(asyncLogoutUser());
      navigate("/register");
    };
 

  return <>
    {/* Main Content Area */}
        <main className="w-full rounded-lg bg-white p-6 shadow-lg md:w-3/4 lg:w-4/5">
          <div>
            {/* User Account Form */}
            <UserDetailForm />
          </div>
          <div className="w-full mt-10 text-right">
            <button className="text-2xl rounded button" type="button" onClick={logoutHandler}>
                Log out
            </button>
          </div>
        </main>
  </>
};





export default AccountDashbard;
