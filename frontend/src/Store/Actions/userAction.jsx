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