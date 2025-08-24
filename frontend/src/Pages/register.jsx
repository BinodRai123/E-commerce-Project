import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../Store/Actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import sideImage from "../assets/side_images_login_signup/sideImage.jpg";

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
      <div className="flex gap-5 justify-center items-center max-w-[1000px] h-screen px-2 mx-auto ">
        <div className="hidden sm:block register-sideimages">
          <img src={sideImage} className="hidden sm:block object-cover w-full max-h-[30rem]" alt="register-side-photo" />
        </div>

        <div className="mx-auto font-sans max-w-fit">
          <h1 className="text-xl md:text-3xl tracking-wider">Create an account</h1>
          <p className="text-xs md:text-[0.9rem] my-1">Enter your details below</p>
          <form
            className="flex flex-col gap-5 my-5"
            onSubmit={handleSubmit(handleRegister)}
          >
            <input
              className="input"
              {...register("name")}
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="input"
              {...register("email")}
              type="email"
              placeholder="Email "
              required
            />
            <input
              className="input"
              {...register("password")}
              type="password"
              placeholder="password"
              required
            />
            <input
              className="button mt-2 md:mt-5"
              type="submit"
              value={"Create Account"}
            />
          </form>
          <p className="text-[0.8rem]">
            Already have Account? <Link className="text-blue-400 border-b" to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
