import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../Store/Actions/userAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
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

        <input type="submit" value={"login"} />
      </form>

      <p className="text-xl text-red-600">{error ? error : ""}</p>
    </>
  );
};

export default Login;
