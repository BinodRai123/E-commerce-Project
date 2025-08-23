import { nanoid } from "@reduxjs/toolkit";
import {useForm} from "react-hook-form"

const Register = () => {
  const {register, handleSubmit, reset} = useForm();

  const handleRegister = (data) => {
    data.id = nanoid();
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <input {...register("name")} type="text" placeholder="Enter your name" />
      <input {...register("email")} type="email" placeholder="abc@gmail.com" />
      <input {...register("password")} type="password" placeholder="*****" />

      <input type="submit" />

    </form>
  )
}

export default Register
