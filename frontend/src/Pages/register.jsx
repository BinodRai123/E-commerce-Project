import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../Store/Actions/userAction";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    data.id = nanoid();
    data.carts = [{ productId: null, count: 0 }];
    dispatch(asyncRegisterUser(data));
    reset();
    navigate("/login");
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          {...register("email")}
          type="email"
          placeholder="abc@gmail.com"
          required
        />
        <input
          {...register("password")}
          type="password"
          placeholder="*****"
          required
        />

        <input type="submit" value={"Register"} />
      </form>

      <p>
        Already have an Account: <Link to={"/login"}>Login</Link>
      </p>
    </>
  );
};

export default Register;
