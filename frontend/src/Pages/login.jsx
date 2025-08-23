import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../Store/Actions/userAction";

const Login = () => {
    
    const { register, handleSubmit, reset } = useForm();
      const dispatch = useDispatch();
    
      const handleRegister = (data) => {
        dispatch(asyncLoginUser(data));
        reset();
      };
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
        <input
          {...register("email")}
          type="email"
          placeholder="abc@gmail.com"
        />
        <input {...register("password")} type="password" placeholder="*****" />

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
