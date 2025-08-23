import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../Store/Actions/userAction";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleRegister = (data) => {
    data.id = nanoid();
    data.carts = [{productId: null, count: 0}]
    dispatch(asyncRegisterUser(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <input {...register("name")} type="text" placeholder="Enter your name" />
      <input {...register("email")} type="email" placeholder="abc@gmail.com" />
      <input {...register("password")} type="password" placeholder="*****" />

      <input type="submit" />
    </form>
  );
};

export default Register;
