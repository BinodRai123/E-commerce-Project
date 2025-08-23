import axios from "../../utils/axios";
import {loadUser} from "../Reducers/userSlicer";


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
        const data = await axios.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
        if(data){
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(loadUser(data));
        }
        else {
            console.error("this user is not defined");
        }
    } catch (error) {
        console.log(error);
    }
}