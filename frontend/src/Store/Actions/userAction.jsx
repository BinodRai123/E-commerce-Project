import axios from "../../utils/axios";
import {loadUser, removeUser} from "../Reducers/userSlicer";


export const asyncRegisterUser = (user) => async(dispatch , getstate) => {
    try {
        console.log(user)
        await axios.post("/users", user);
    } catch (error) {
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async(dispatch, getstate) => {
    try {
        const {data} = await axios.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
        if(data.length > 0){
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(loadUser(data[0]));
            return {success: true}
        }
        else {
            console.error("this user is not defined");
            return {success: false, message: "Invalid email or password"};
        }
    } catch (error) {
        return{success: false, message: error.message};
    }
}


export const asyncLogoutUser = () => async(dispatch , getstate) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeUser());
    } catch (error) {
        console.log(error);
    }
}