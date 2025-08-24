import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../Store/Actions/userAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sideImage from "../assets/side_images_login_signup/sideImage.jpg";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async (data) => {
    const response = await dispatch(asyncLoginUser(data));
    if (response.success) {
      navigate("/");
      reset();
    } else setError(response.message);
  };
  return (
    <div className="flex gap-5 justify-center items-center max-w-[1000px] h-screen px-2 mx-auto my-10">
      <div className="register-sideimages">
        <img src={sideImage} className="w-full h-[80%] object-cover" alt="logout-side-photo" />
      </div>
      <div className="my-16 mx-auto font-sans max-w-fit">
        <h1 className="text-xl md:text-4xl tracking-wider">Log in your account</h1>
        <p className="text-xs md:text-[0.9rem] my-2 md:my-5">Enter your detail below</p>
        <form
          className="flex flex-col gap-5 my-5"
          onSubmit={handleSubmit(handleRegister)}
        >
          <input
            className="input"
            {...register("email")}
            type="email"
            placeholder="Enter Email"
            required
          />
          <input
            className="input"
            {...register("password")}
            type="password"
            placeholder="Password"
            required
          />
          <input className="button mt-5" type="submit" value={"login"} />
        </form>
        <p className="text-xl text-red-600">{error ? error : ""}</p>
      </div>
    </div>
  );
};

export default Login;
